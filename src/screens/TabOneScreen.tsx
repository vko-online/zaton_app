import React from 'react'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { CommonActions } from '@react-navigation/native'
import { StyleSheet, Button } from 'react-native'

import EditScreenInfo from 'src/components/EditScreenInfo'
import LinkButton from 'src/components/LinkButton'
import { Text, View } from 'src/components/Themed'
import { TabOneParamList } from 'src/types'

interface Props {
  navigation: DrawerNavigationProp<TabOneParamList, 'TabOneScreen'>
}
export default function TabOneScreen ({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      <EditScreenInfo path='/screens/TabOneScreen.tsx' />
      <Button title='Open' onPress={() => navigation.dispatch(CommonActions.navigate('TabTwo'))} />
      <LinkButton to='/two'>
        Go to 2
      </LinkButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
