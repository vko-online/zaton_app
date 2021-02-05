import { createContext } from 'react'

export interface IAuthContext {
  signIn: (token: string) => Promise<void>
  signUp: (token: string) => Promise<void>
  signOut: () => Promise<void>
}

export interface IState {
  userToken?: string | null
  isLoading: boolean
  isSignout: boolean
}
export interface IAction {
  type: 'SIGN_IN' | 'SIGN_UP' | 'SIGN_OUT' | 'RESTORE_TOKEN'
  token?: string | null
}
export const initialState: IState = {
  isLoading: true,
  isSignout: false,
  userToken: null
}
export function authReducer (prevState: IState, action: IAction): IState {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false
      }
    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token
      }
    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: null
      }
  }
  return initialState
}
const AuthContext = createContext<IAuthContext>({} as IAuthContext)

export default AuthContext
