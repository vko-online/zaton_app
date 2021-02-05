import React, { useEffect, useMemo, useReducer } from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ColorSchemeName } from 'react-native-appearance'
import AsyncStorage from '@react-native-async-storage/async-storage'

import SplashScreen from 'src/components/SplashScreen'
import NotFoundScreen from 'src/screens/NotFound'
import AuthScreen from 'src/screens/Auth'
import { RootStackParamList } from 'src/types'
import ModalNavigator from './ModalNavigator'
import DrawerNavigator from './DrawerNavigator'
import LinkingConfiguration from './LinkingConfiguration'
import AuthContext, { authReducer, initialState } from 'src/contexts/Auth'
import client from 'src/services/api'

export default function Navigation ({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  )
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>()

function RootNavigator () {
  const [state, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const userToken = await AsyncStorage.getItem('userToken')
        dispatch({ type: 'RESTORE_TOKEN', token: userToken })
      } catch (e) {
        // Restoring token failed
      }
    }

    bootstrapAsync()
  }, [])

  const authContext = useMemo(
    () => ({
      signIn: async (token: string) => {
        await AsyncStorage.setItem('userToken', token)
        dispatch({ type: 'SIGN_IN', token })
      },
      signOut: async () => {
        await client.clearStore()
        dispatch({ type: 'SIGN_OUT', token: null })
      },
      signUp: async (token: string) => {
        await AsyncStorage.setItem('userToken', token)
        dispatch({ type: 'SIGN_UP', token })
      }
    }),
    []
  )

  if (state.isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />
  }

  console.log('state.userToken', state.userToken)
  return (
    <AuthContext.Provider value={authContext}>
      <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>
        {
          state.userToken
            ? <>
                <Stack.Screen name='Root' component={DrawerNavigator} />
                <Stack.Screen name='Modal' component={ModalNavigator} />
                <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
              </>
            : <>
                <Stack.Screen name='Auth' component={AuthScreen} />
                <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
              </>
        }
      </Stack.Navigator>
    </AuthContext.Provider>
  )
}
