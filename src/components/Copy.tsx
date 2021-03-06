import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text, Colors } from 'react-native-paper'
import Clipboard from 'expo-clipboard'
import { useSnackbar } from 'src/contexts/Snackbar'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

interface Props {
  data?: string | null
}
export default function Component ({ data }: Props) {
  const { show } = useSnackbar()

  function handlePress () {
    Clipboard.setString(data!)
    show('Скопировано')
  }
  if (!data) {
    return <View />
  }
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress} style={s.button}>
      <View style={s.icon}>
        <Icon name='content-copy' size={18} />
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
