import React from 'react'
import { CommonActions } from '@react-navigation/native'
import { Appbar } from 'react-native-paper'
import { StackHeaderProps } from '@react-navigation/stack'
import Constants from 'expo-constants'

export default function Header ({ scene, navigation }: StackHeaderProps) {
  return (
    <>
      <Appbar.Header>
        <Appbar.Content
          title={`${Constants.manifest.name} / ${scene.descriptor.options.title}`}
        />
        <Appbar.Action
          icon='close'
          onPress={() => navigation.dispatch(CommonActions.navigate('Root'))}
        />
      </Appbar.Header>
    </>
  )
}
