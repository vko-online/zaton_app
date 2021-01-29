import React from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { StyleSheet } from 'react-native'
import { Paragraph } from 'react-native-paper'

import { View } from 'src/components/Themed'
import { TabOneParamList } from 'src/types'

interface Props {
  navigation: DrawerNavigationProp<TabOneParamList, 'TabOneScreen'>
}
export default function Screen () {
  return (
    <View style={s.container}>
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
