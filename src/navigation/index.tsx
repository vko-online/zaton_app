import React from 'react'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { ColorSchemeName } from 'react-native-appearance'

import NotFoundScreen from 'src/screens/NotFound'
import { RootStackParamList } from 'src/types'
import ModalNavigator from './ModalNavigator'
import DrawerNavigator from './DrawerNavigator'
import LinkingConfiguration from './LinkingConfiguration'

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
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animationEnabled: true }}>
      <Stack.Screen name='Root' component={DrawerNavigator} />
      <Stack.Screen name='Modal' component={ModalNavigator} />
      <Stack.Screen name='NotFound' component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  )
}
