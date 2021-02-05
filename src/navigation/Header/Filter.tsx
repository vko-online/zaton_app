import React from 'react'
import {
  DrawerActions
} from '@react-navigation/native'
import { Appbar } from 'react-native-paper'
import Constants from 'expo-constants'
import { StackHeaderProps } from '@react-navigation/stack'
import { useWindowDimensions } from 'react-native'

export default function Header ({ scene, navigation }: StackHeaderProps) {
  const dimensions = useWindowDimensions()
  const isLargeScreen = dimensions.width >= 768
  const titles = [Constants.manifest.name, scene.descriptor.options.title].join(' / ')

  return (
    <>
      <Appbar.Header>
        {!isLargeScreen && (
          <Appbar.Action
            icon='menu'
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          />
        )}
        <Appbar.Content
          title={titles}
        />
        <Appbar.Action icon='filter' />
      </Appbar.Header>
    </>
  )
}
