import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Colors, Text } from 'react-native-paper'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import * as Linking from 'expo-linking'

interface Props {
  data?: string | null
  prefix: 'tel' | 'mailto'
}
const icon = {
  tel: 'phone',
  mailto: 'email'
}
export default function Component ({ prefix, data }: Props) {
  function handlePress () {
    if (Linking.canOpenURL(`${prefix}:${data}`)) {
      Linking.openURL(`${prefix}:${data}`)
    }
  }
  if (!data) {
    return <View />
  }
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress} style={s.button}>
      <View style={s.icon}>
        <Icon name={icon[prefix] as any} size={18} />
      </View>
      <Text style={s.text}>{data}</Text>
    </TouchableOpacity>
  )
}

const s = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  icon: {
    padding: 4
  },
  text: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'dotted',
    textDecorationColor: Colors.grey500
  }
})
