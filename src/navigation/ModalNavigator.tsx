import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import SearchScreen from 'src/screens/Search'
import NewClientScreen from 'src/screens/Clients/NewClient'
import NotificationsScreen from 'src/screens/Notifications'
import ModalHeader from './ModalHeader'
import { ModalParamList } from 'src/types'

const ModalStack = createStackNavigator<ModalParamList>()

export default function BottomTabNavigator () {
  return (
    <ModalStack.Navigator
      initialRouteName='Search'
      mode='modal'
      detachInactiveScreens
      screenOptions={{
        header: props => <ModalHeader {...props} />,
        ...TransitionPresets.ModalSlideFromBottomIOS
      }}
    >
      <ModalStack.Screen
        name='NewClientScreen'
        component={NewClientScreen}
        options={{
          title: 'Новый счет'
        }}
      />
      <ModalStack.Screen
        name='Search'
        component={SearchScreen}
        options={{
          title: 'поиск'
        }}
      />
      <ModalStack.Screen
        name='Notifications'
        component={NotificationsScreen}
        options={{
          title: 'уведомления'
        }}
      />
    </ModalStack.Navigator>
  )
}
