import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import ComplexTable from 'src/components/ComplexTable'
import { Client, Maybe, useClientsQuery } from 'src/generated/graphql'

import { ClientsParamList } from 'src/types'
import NavButton from 'src/components/NavButton'

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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <NavButton title='Создать' onPress={() => navigation.navigate('NewClientScreen') } />
    })
  }, [navigation])

  function handlePress (
    client?: Maybe<
      Pick<
        Client,
        | 'address'
        | 'id'
        | 'companyName'
        | 'contactFullName'
        | 'phone'
        | 'ltv'
        | 'email'
      >
    >
  ) {
    if (client) {
      navigation.navigate('ViewClientScreen', { client })
    }
  }

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      style={s.root}
    >
      <ComplexTable
        data={data?.clients}
        sortable={false} // TODO: sorting crashing
        loading={loading}
        error={error}
        onPress={handlePress}
        first={{ label: 'Наименование', value: 'companyName' } as any}
        middle={
          [
            { label: 'Адрес', value: 'address' },
            { label: 'Контактное лицо', value: 'contactFullName' },
            { label: 'Телефон', value: 'phone' },
            { label: 'Email', value: 'email' }
          ] as any
        }
        last={{ label: 'ПСК', value: 'ltv' } as any}
      />
    </ScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    backgroundColor: '#fff'
  }
})
