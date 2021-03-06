import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-native-paper'
import { ApolloProvider } from '@apollo/client'
import useCachedResources from 'src/hooks/useCachedResources'
import useColorScheme from 'src/hooks/useColorScheme'
import Navigation from 'src/navigation'
import { getTheme } from 'src/constants/Theme'
import client from 'src/services/api'
import { SnackbarProvider, SnackbarRoot } from 'src/contexts/Snackbar'

export default function Index () {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()
  const theme = getTheme(colorScheme)
  console.log('theme', theme)

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <ApolloProvider client={client}>
          <Provider theme={theme}>
            <SnackbarProvider>
              <Navigation colorScheme={colorScheme} />
              <StatusBar style='dark' />
              <SnackbarRoot />
            </SnackbarProvider>
          </Provider>
        </ApolloProvider>
      </SafeAreaProvider>
    )
  }
}
