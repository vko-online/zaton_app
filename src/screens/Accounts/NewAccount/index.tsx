import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Surface, Caption, TextInput, IconButton, Button, Divider } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import * as Yup from 'yup'
import { FieldArray, Formik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Spacer } from 'src/components/Common'
import { ClientsParamList } from 'src/types'
import Dropdown from 'src/components/Dropdown'
import { useCreateClientMutation, ClientInput, AccountInput } from 'src/generated/graphql'

const bankSchema = Yup.object().shape({
  name: Yup.string().required(),
  bic: Yup.string().required(),
  iban: Yup.string().required()
})
const schema = Yup.object().shape({
  accounts: Yup.array(bankSchema)
})
const initialAccount: AccountInput = {
  bic: '',
  iban: '',
  name: ''
}
const initialValues: ClientInput = {
  id: null,
  address: '',
  phone: '',
  accounts: [],
  note: '',
  companyName: '',
  contactFullName: '',
  contactRole: '',
  email: '',
  iin: ''
}
const banks = [{
  bic: 'XC34',
  name: 'kaspi'
}, {
  bic: 'A341',
  name: 'halyk'
}, {
  bic: 'NG21',
  name: 'sber'
}]
export default function Screen ({
  navigation
}: StackScreenProps<ClientsParamList, 'NewClientScreen'>) {
  const [createClient, { loading }] = useCreateClientMutation()
  async function onSubmit (values: ClientInput) {
    try {
      const response = await createClient({
        variables: {
          data: values
        }
      })
      console.log('response', response)
      navigation.goBack()
    } catch (e) {
      console.log('error', e.message)
    }
  }

  return (
    <KeyboardAwareScrollView>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleSubmit, isValid }) => (
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
              <Spacer />
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
                value={values.contactFullName!}
              />
              <Spacer />
              <TextInput
                label='Должность'
                placeholder='Должность контактного лица'
                mode='outlined'
                onChangeText={handleChange('contactRole')}
                value={values.contactRole!}
              />
              <Spacer />
              <TextInput
                label='Телефон'
                placeholder='Номер телефона компании'
                mode='outlined'
                onChangeText={handleChange('phone')}
                value={values.phone!}
              />
              <Spacer />
              <TextInput
                label='Email'
                placeholder='Почтовый адрес компании'
                mode='outlined'
                keyboardType='email-address'
                autoCapitalize='none'
                onChangeText={handleChange('email')}
                value={values.email!}
              />
              <Spacer />
              <TextInput
                label='Адрес'
                placeholder='Адрес компании'
                mode='outlined'
                onChangeText={handleChange('address')}
                value={values.address!}
              />
            </Surface>
            <Surface style={s.card}>
              <Caption>Счета</Caption>
              <FieldArray
                name='accounts'
                render={(arrayHelpers) => (
                  <>
                    {
                      values.accounts && values.accounts.length
                        ? values.accounts.map((bank, index) => (
                            <View key={index}>
                              <View style={s.row}>
                                <View style={s.full}>
                                  <TextInput
                                    label='IBAN'
                                    placeholder='Номер IBAN счета'
                                    mode='outlined'
                                    onChangeText={handleChange(`accounts.${index}.iban`)}
                                    value={values!.accounts![index]!.iban}
                                  />
                                  <Spacer />
                                  <Dropdown placeholder='Выбрать банк' noOptionLabel='Банк не выбран'>
                                    {banks.map(v => (
                                      <Dropdown.Option
                                        itemKey={v.bic}
                                        key={v.bic}
                                        value={v.bic}
                                        label={v.name}
                                        title={v.name}
                                        description={v.bic}
                                      />
                                    ))}
                                  </Dropdown>
                                </View>
                                <IconButton icon='close' onPress={() => arrayHelpers.remove(index)} />
                              </View>
                              <Spacer />
                              {
                                index === values?.accounts!.length - 1
                                  ? <Button icon='plus' mode='outlined' onPress={() => arrayHelpers.insert(index, initialAccount)}>
                                      Добавить еще счет
                                    </Button>
                                  : null
                              }
                              <Divider />
                            </View>
                          ))
                        : <Button icon='plus' mode='outlined' onPress={() => arrayHelpers.push(initialAccount)}>
                            Добавить счет
                          </Button>
                    }
                  </>
                )}
              />
            </Surface>
            <Surface style={s.card}>
              <Button disabled={!isValid || loading} mode='contained' onPress={handleSubmit}>Добавить</Button>
            </Surface>
            <Spacer />
            <Spacer />
            <Spacer />
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
