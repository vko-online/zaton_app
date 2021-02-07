import React, { useReducer, createContext, useContext, ReactNode } from 'react'
import { Snackbar as PaperSnackbar } from 'react-native-paper'

type SnackbarAction = {
  label: string;
  accessibilityLabel?: string | undefined;
  onPress: () => void;
}

type SnackbarContextState = {
  type: string;
  visible: boolean;
  message?: string;
  action?: SnackbarAction
};

const initialState: SnackbarContextState = {
  type: 'close',
  visible: false
}

type SnackbarContextType = {
  snackbar: SnackbarContextState
  show: (message: string, action?: SnackbarAction) => void
  hide: () => void
};

type DispatchAction = {
  type: 'close'
} | {
  type: 'open'
  message: string
  action?: SnackbarAction
}
function reducer (state: SnackbarContextState, action: DispatchAction): SnackbarContextState {
  switch (action.type) {
    case 'close':
      return initialState
    case 'open':
      return {
        ...state,
        visible: true,
        message: action.message,
        action: action.action
      }
    default:
      return initialState
  }
}

const defaultContext = {
  show: () => null,
  hide: () => null,
  snackbar: initialState
}
const SnackbarContext = createContext<SnackbarContextType>(defaultContext)

type Props = {
  children: ReactNode
};

export function SnackbarProvider ({ children }: Props) {
  const [snackbar, dispatch] = useReducer(reducer, initialState)

  const show = (message: string, action?: SnackbarAction) => dispatch({
    type: 'open',
    message,
    action
  })

  const hide = () => dispatch({ type: 'close' })

  return (
    <SnackbarContext.Provider value={{ snackbar, show, hide }}>
      {children}
    </SnackbarContext.Provider>
  )
}

export function useSnackbar () {
  return useContext(SnackbarContext)
}

export function SnackbarRoot () {
  const { snackbar, hide } = useSnackbar()

  return (
    <PaperSnackbar
      visible={snackbar.visible}
      onDismiss={hide}
      action={snackbar.action}
    >
      {snackbar.message}
    </PaperSnackbar>
  )
}
