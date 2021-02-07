import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Card, IconButton } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import Contribution from './Charts/Contribution'
import { useDashboardQuery } from 'src/generated/graphql'

import { DashboardParamList } from 'src/types'
import { Spacer } from 'src/components/Common'
import Container from 'src/components/Card/Container'

export default function Screen ({
  navigation
}: StackScreenProps<DashboardParamList, 'DashboardScreen'>) {
  const { data } = useDashboardQuery()
  return (
    <ScrollView style={s.root}>
      <Card>
        <Card.Title
          title={`Привет ${data?.me?.name || ''}`}
          subtitle={format(new Date(), 'EEEE, d yyyy', { locale: ru })}
          right={(props) => <IconButton size={40} icon='account-circle-outline' />}
        />
      </Card>
      <Spacer />
      <Container empty emptyText='Пусто' id='inbox' title='Входящие' children={null} />
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
