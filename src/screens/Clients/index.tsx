import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import { Colors, FAB, Surface } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import ComplexTable from 'src/components/ComplexTable'

import { ClientsParamList } from 'src/types'

const data = [{
  companyName: 'Recoil',
  contactFullName: 'Тлеукабылулы Медет',
  address: 'Аксай 5, 25, блок 6, кв 25',
  phone: ' 8 757 9199153',
  ltv: 10000
}, {
  companyName: 'ИП MEDEX',
  contactFullName: 'Джазылбеков Ернар',
  address: 'Шашкина 25, 2',
  phone: ' 8 7272 5552234',
  ltv: 24000
}]
export default function Screen ({
  navigation
}: StackScreenProps<ClientsParamList, 'ClientsScreen'>) {
  // contentInset={{ bottom: 0, left: 0, right: 0, top: -100 }}
  return (
    <Surface style={s.root}>
      <ScrollView>
        <ComplexTable
          data={data}
          first={{ label: 'Наименование', value: 'companyName' }}
          middle={[{ label: 'Адрес', value: 'address' }, { label: 'Контактное лицо', value: 'contactFullName' }, { label: 'Телефон', value: 'phone' }]}
          last={{ label: 'ПСК', value: 'ltv' }}
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
