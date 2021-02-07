import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'

interface Props {
  title: string
  onPress: () => void
}
export default function Component ({ title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={s.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  button: {
    marginHorizontal: 20
  }
})
