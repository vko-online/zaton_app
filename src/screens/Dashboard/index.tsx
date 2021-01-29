import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParamList } from 'src/types'

export default function Screen ({
  navigation
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <View style={s.root}>
      <Text>Screen</Text>
    </View>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
