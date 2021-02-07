import React from 'react'
import { View, StyleSheet } from 'react-native'
import { IconButton, Text } from 'react-native-paper'
import Clipboard from 'expo-clipboard'
import { useSnackbar } from 'src/contexts/Snackbar'

interface Props {
  data?: string | null
}
export default function Component ({ data }: Props) {
  const { show } = useSnackbar()

  function handleCopy () {
    Clipboard.setString(data!)
    show('Скопировано')
  }
  if (!data) {
    return <View />
  }
  return (
    <View style={s.bin}>
      <IconButton icon='content-copy' onPress={handleCopy} />
      <Text>{data}</Text>
    </View>
  )
}

const s = StyleSheet.create({
  bin: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})
