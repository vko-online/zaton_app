import React, { useMemo } from 'react'
import { Appbar } from 'react-native-paper'
import Constants from 'expo-constants'
import { StackHeaderProps } from '@react-navigation/stack'

export default function Header ({ scene, navigation }: StackHeaderProps) {
  const canGoBack = useMemo(() => navigation.canGoBack(), [navigation])
  const titles = [Constants.manifest.name, scene.descriptor.options.title].join(' / ')

  return (
    <>
      <Appbar.Header>
        {canGoBack && (
          <Appbar.Action
            icon='keyboard-backspace'
            onPress={() => navigation.goBack()}
          />
        )}
        <Appbar.Content
          title={titles}
        />
      </Appbar.Header>
    </>
  )
}
