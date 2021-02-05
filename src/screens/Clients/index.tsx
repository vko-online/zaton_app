import React, { useState } from 'react'
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import { Colors, FAB, Surface } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import ComplexTable from 'src/components/ComplexTable'
import { Client, Maybe, useClientsQuery } from 'src/generated/graphql'

import { ClientsParamList } from 'src/types'

export default function Screen ({
  navigation
}: StackScreenProps<ClientsParamList, 'ClientsScreen'>) {
  const { data, loading, error, refetch } = useClientsQuery()
  const [refreshing, setRefreshing] = useState(false)

  async function handleRefresh () {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  function handlePress (client?: Maybe<Pick<Client, 'address' | 'id' | 'companyName' | 'contactFullName' | 'phone' | 'ltv' | 'email'>>) {
    if (client) {
      navigation.navigate('ViewClientScreen', { client })
    }
  }

  return (
    <Surface style={s.root}>
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />}>
        <ComplexTable
          data={data?.clients}
          loading={loading}
          error={error}
          onPress={handlePress}
          first={{ label: 'Наименование', value: 'companyName' } as any}
          middle={[{ label: 'Адрес', value: 'address' }, { label: 'Контактное лицо', value: 'contactFullName' }, { label: 'Телефон', value: 'phone' }, { label: 'Email', value: 'email' }] as any}
          last={{ label: 'ПСК', value: 'ltv' } as any}
        />
      </ScrollView>
      <FAB
        style={s.fab}
        icon='plus'
        label='Создать'
        uppercase={false}
        onPress={() => navigation.navigate('NewClientScreen')}
      />
    </Surface>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1
  },
  fab: {
    backgroundColor: Colors.red200,
    position: 'absolute',
    margin: 16,
    right: 16,
    bottom: 16
  }
})
