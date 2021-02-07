import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Card, IconButton } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import Contribution from './Charts/Contribution'

import { RootStackParamList } from 'src/types'
import { Spacer } from 'src/components/Common'

export default function Screen ({
  navigation
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  return (
    <ScrollView style={s.root}>
      <Card>
        <Card.Title
          title='Привет Медет'
          subtitle={format(new Date(), 'EEEE, d yyyy', { locale: ru })}
          right={(props) => <IconButton size={40} icon='account-circle-outline' />}
        />
      </Card>
      <Spacer />
      <Contribution />
    </ScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    padding: 10
  }
})
