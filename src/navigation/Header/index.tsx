import React from 'react'
import {
  useNavigation,
  DrawerActions,
  CommonActions
} from '@react-navigation/native'
import { Appbar } from 'react-native-paper'
import useIsLargeScreen from 'src/hooks/useIsLargeScreen'
import Constants from 'expo-constants'

export default function Header () {
  const navigation = useNavigation()
  const isLargeScreen = useIsLargeScreen()

  return (
    <>
      <Appbar.Header>
        {!isLargeScreen && (
          <Appbar.Action
            icon='menu'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )}
        <Appbar.Content title={Constants.manifest.name} />
        <Appbar.Action
          icon='magnify'
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate('Modal', { screen: 'Search' })
            )
          }
        />
        <Appbar.Action
          icon='bell'
          onPress={() =>
            navigation.dispatch(
              CommonActions.navigate('Modal', {
                screen: 'Notifications'
              })
            )
          }
        />
        <Appbar.Action icon='account-circle' />
      </Appbar.Header>
    </>
  )
}
