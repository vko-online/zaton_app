import React from 'react'
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack'

import SearchScreen from '../screens/Search'
import NotificationsScreen from '../screens/Notifications'
import ModalHeader from './ModalHeader'

const ModalStack = createStackNavigator()

export default function BottomTabNavigator () {
  return (
    <ModalStack.Navigator
      initialRouteName='Search'
      mode='modal'
      screenOptions={{
        header: props => <ModalHeader {...props} />,
        ...TransitionPresets.ModalSlideFromBottomIOS
      }}
    >
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
