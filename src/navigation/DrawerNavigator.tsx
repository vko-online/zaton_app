import {
  createDrawerNavigator, DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import Header from './Header'

import TabOneScreen from 'src/screens/TabOneScreen'
import TabTwoScreen from 'src/screens/TabTwoScreen'
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from 'src/types'
import { Platform } from 'react-native'
import useIsLargeScreen from 'src/hooks/useIsLargeScreen'

const Drawer = createDrawerNavigator<BottomTabParamList>()

const screenOptions = {
  header: () => <Header />
}

type DrawerType = 'front' | 'back' | 'slide' | 'permanent'
export default function BottomTabNavigator () {
  const isLargeScreen = useIsLargeScreen()
  const drawerType = Platform.select<DrawerType>({
    web: isLargeScreen ? 'permanent' : 'front',
    default: 'front'
  })

  return (
    <Drawer.Navigator
      initialRouteName='TabOne'
      openByDefault={isLargeScreen}
      drawerType={drawerType}
      // drawerStyle={isLargeScreen ? null : { width: '100%' }}
      // overlayColor="transparent"
      drawerContent={props => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
    >
      <Drawer.Screen name='TabOne' component={TabOneNavigator} options={{ title: 'Клиенты' }} />
      <Drawer.Screen name='TabTwo' component={TabTwoNavigator} options={{ title: 'Коммерческие предложения' }} />
    </Drawer.Navigator>
  )
}

const TabOneStack = createStackNavigator<TabOneParamList>()

function TabOneNavigator () {
  return (
    <TabOneStack.Navigator screenOptions={screenOptions}>
      <TabOneStack.Screen
        name='TabOneScreen'
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  )
}

const TabTwoStack = createStackNavigator<TabTwoParamList>()

function TabTwoNavigator () {
  return (
    <TabTwoStack.Navigator screenOptions={screenOptions}>
      <TabTwoStack.Screen
        name='TabTwoScreen'
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  )
}
