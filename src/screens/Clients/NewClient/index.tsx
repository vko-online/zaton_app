import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Surface, Caption, TextInput, IconButton, Button, Divider } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import * as Yup from 'yup'
import { FieldArray, Formik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { RootStackParamList } from 'src/types'
import Dropdown from 'src/components/Dropdown'

interface BankAccount {
  name: string
  bic: string
  iban: string
}
interface NewClientForm {
  companyName: string
  address: string
  email: string
  iin: string
  phone: string
  contactFullName: string
  contactRole: string
  bankAccounts: BankAccount[]
}
const bankSchema = Yup.object({
  name: Yup.string().required(),
  bic: Yup.string().required(),
  iban: Yup.string().required()
})
const schema = Yup.object({
  companyName: Yup.string().required(),
  address: Yup.string().optional(),
  email: Yup.string().optional(),
  iin: Yup.string().required(),
  phone: Yup.string().optional(),
  contactFullName: Yup.string().optional(),
  contactRole: Yup.string().optional(),
  bankAccounts: Yup.array(bankSchema)
})
const initialBankAccount: BankAccount = {
  bic: 'demo',
  iban: '',
  name: 'demo'
}
const initialValues: NewClientForm = {
  address: '',
  phone: '',
  bankAccounts: [],
  companyName: '',
  contactFullName: '',
  contactRole: '',
  email: '',
  iin: ''
}
const banks = [{
  id: 1,
  bic: 'XC34',
  name: 'kaspi'
}, {
  id: 2,
  bic: 'A341',
  name: 'halyk'
}, {
  id: 3,
  bic: 'NG21',
  name: 'sber'
}]
export default function Screen ({
  navigation
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  function handleSubmit (values: NewClientForm) {}

  return (
    <KeyboardAwareScrollView>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
          <>
            <Surface style={s.card}>
              <Caption>Базовая информация</Caption>
              <TextInput
                label='ИИН / БИН'
                placeholder='ИИН / БИН компании'
                mode='outlined'
                onChangeText={handleChange('iin')}
                value={values.iin}
              />
              <View style={s.spacer} />
              <TextInput
                label='Наименование'
                placeholder='Наименование компании'
                mode='outlined'
                onChangeText={handleChange('companyName')}
                value={values.companyName}
              />
            </Surface>
            <Surface style={s.card}>
              <Caption>Контакты</Caption>
              <TextInput
                label='Полное имя'
                placeholder='Полное имя контактного лица'
                mode='outlined'
                onChangeText={handleChange('contactFullName')}
                value={values.contactFullName}
              />
              <View style={s.spacer} />
              <TextInput
                label='Должность'
                placeholder='Должность контактного лица'
                mode='outlined'
                onChangeText={handleChange('contactRole')}
                value={values.contactRole}
              />
              <View style={s.spacer} />
              <TextInput
                label='Телефон'
                placeholder='Номер телефона компании'
                mode='outlined'
                onChangeText={handleChange('phone')}
                value={values.phone}
              />
              <View style={s.spacer} />
              <TextInput
                label='Email'
                placeholder='Почтовый адрес компании'
                mode='outlined'
                onChangeText={handleChange('email')}
                value={values.email}
              />
              <View style={s.spacer} />
              <TextInput
                label='Адрес'
                placeholder='Адрес компании'
                mode='outlined'
                onChangeText={handleChange('address')}
                value={values.address}
              />
            </Surface>
            <Surface style={s.card}>
              <Caption>Счета</Caption>
              <FieldArray
                name='bankAccounts'
                render={(arrayHelpers) => (
                  <>
                    {
                      values.bankAccounts && values.bankAccounts.length
                        ? values.bankAccounts.map((bank, index) => (
                            <View key={index}>
                              <View style={s.row}>
                                <View style={s.full}>
                                  <TextInput
                                    label='IBAN'
                                    placeholder='Номер IBAN счета'
                                    mode='outlined'
                                    onChangeText={handleChange(`bankAccounts.${index}.iban`)}
                                    value={values.bankAccounts[index].iban}
                                  />
                                  <View style={s.spacer} />
                                  <Dropdown placeholder='Выбрать банк' noOptionLabel='Банк не выбран'>
                                    {banks.map(v => (
                                      <Dropdown.Option
                                        itemKey={v.id}
                                        key={v.id}
                                        value={v.id}
                                        label={v.name}
                                        title={v.name}
                                        description={v.bic}
                                      />
                                    ))}
                                  </Dropdown>
                                </View>
                                <IconButton icon='close' onPress={() => arrayHelpers.remove(index)} />
                              </View>
                              <View style={s.spacer} />
                              {
                                index === values?.bankAccounts.length - 1
                                  ? <Button icon='plus' mode='outlined' onPress={() => arrayHelpers.insert(index, initialBankAccount)}>
                                      Добавить еще счет
                                    </Button>
                                  : null
                              }
                              <Divider />
                            </View>
                          ))
                        : <Button icon='plus' mode='outlined' onPress={() => arrayHelpers.push(initialBankAccount)}>
                            Добавить счет
                          </Button>
                    }
                  </>
                )}
              />
            </Surface>
            <Surface style={s.card}>
              <Button mode='contained'>Добавить</Button>
            </Surface>
            <View style={s.spacer} />
            <View style={s.spacer} />
            <View style={s.spacer} />
          </>
        )}
      </Formik>
    </KeyboardAwareScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1
  },
  card: {
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10
  },
  spacer: {
    height: 10
  },
  row: {
    flexDirection: 'row'
  },
  full: {
    flex: 1
  }
})
