import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, RefreshControl } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import ComplexTable from 'src/components/ComplexTable'
import { useProductsQuery } from 'src/generated/graphql'

import { ProductsParamList } from 'src/types'
import NavButton from 'src/components/NavButton'

export default function Screen ({
  navigation
}: StackScreenProps<ProductsParamList, 'ProductsScreen'>) {
  const { data, loading, error, refetch } = useProductsQuery()
  const [refreshing, setRefreshing] = useState(false)

  async function handleRefresh () {
    setRefreshing(true)
    await refetch()
    setRefreshing(false)
  }

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <NavButton title='Создать' onPress={() => navigation.navigate('NewProductScreen') } />
    })
  }, [navigation])

  function handlePress (
    product?: any
  ) {
    if (product) {
      navigation.navigate('ViewProductScreen', { product })
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
        data={data?.products}
        sortable={false} // TODO: sorting crashing
        loading={loading}
        error={error}
        onPress={handlePress}
        first={{ label: 'Наименование', value: 'name' } as any}
        middle={
          [
            { label: 'Цена', value: 'price' },
            { label: 'Измерение', value: 'unit' },
            { label: 'Дата создания', value: 'createdAt' }
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
