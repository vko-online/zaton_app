import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Paragraph, Searchbar } from 'react-native-paper'

import { View } from 'src/components/Themed'

export default function Screen () {
  const [query, setQuery] = useState('')
  return (
    <View style={s.container}>
      <Searchbar autoFocus value={query} onChangeText={setQuery} />
      <Paragraph>
        Content goes here
      </Paragraph>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  title: {
    fontFamily: 'montserrat-medium',
    fontSize: 20,
    fontWeight: 'bold'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%'
  }
})
