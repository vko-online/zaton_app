import React from 'react'
import { StyleSheet } from 'react-native'
import { Card, TextInput, Button } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Spacer } from 'src/components/Common'
import { ClientsParamList } from 'src/types'
import Accounts from 'src/components/Card/Accounts'
import { useCreateClientMutation, ClientInput } from 'src/generated/graphql'

const bankSchema = Yup.object().shape({
  name: Yup.string().required(),
  bic: Yup.string().required(),
  iban: Yup.string().required()
})
const schema = Yup.object().shape({
  companyName: Yup.string().required(),
  address: Yup.string().optional(),
  email: Yup.string().optional(),
  iin: Yup.string().required(),
  phone: Yup.string().optional(),
  contactFullName: Yup.string().optional(),
  contactRole: Yup.string().optional(),
  accounts: Yup.array(bankSchema)
})
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
    <KeyboardAwareScrollView contentContainerStyle={s.root}>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ values, handleChange, handleSubmit, isValid }) => (
          <>
            <Card>
              <Card.Title title='Базовая информация' />
              <Card.Content>
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
              </Card.Content>
            </Card>
            <Spacer />
            <Card>
              <Card.Title title='Контакты' />
              <Card.Content>
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
              </Card.Content>
            </Card>
            <Spacer />
            <Accounts data={[]} />
            <Spacer />
            <Button disabled={!isValid || loading} mode='contained' onPress={handleSubmit}>Создать</Button>
            <Spacer />
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
    padding: 10
  }
})
