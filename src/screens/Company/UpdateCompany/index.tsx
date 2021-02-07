
import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput, Button, Card } from 'react-native-paper'
import { ViewCompanyDocument, useUpdateCompanyMutation } from 'src/generated/graphql'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Spacer } from 'src/components/Common'
import { RouteProp } from '@react-navigation/native'
import { CompanyParamList } from 'src/types'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackNavigationProp } from '@react-navigation/stack'
import { useSnackbar } from 'src/contexts/Snackbar'

const schema = Yup.object().shape({
  name: Yup.string().optional(),
  address: Yup.string().optional(),
  phone: Yup.string().optional(),
  bin: Yup.string().optional(),
  website: Yup.string().optional(),
  email: Yup.string().optional(),
  currency: Yup.string().optional()
})

interface Props {
  route: RouteProp<CompanyParamList, 'UpdateCompanyScreen'>
  navigation: StackNavigationProp<CompanyParamList, 'UpdateCompanyScreen'>
}
export default function Screen ({ route, navigation }: Props) {
  const { show } = useSnackbar()
  const [update, { loading }] = useUpdateCompanyMutation({
    update (cache, { data }) {
      cache.writeQuery({
        query: ViewCompanyDocument,
        data: data?.updateCompany
      })
    }
  })

  const company = route.params?.company
  const formik = useFormik({
    validationSchema: schema,
    initialValues: {
      name: company.name || '',
      phone: company.phone || '',
      address: company.address || '',
      bin: company.bin || '',
      website: company.website || '',
      email: company.email || '',
      currency: company.currency || ''
    },
    onSubmit: async (values) => {
      await update({
        variables: {
          data: values
        }
      })
      show('Сохранено')
      navigation.goBack()
    }
  })

  return (
    <KeyboardAwareScrollView keyboardShouldPersistTaps='always' contentContainerStyle={s.root}>
      <Card>
        <Card.Title title={formik.values.name} />
        <Card.Content>
          <TextInput
            label='Название'
            placeholder='Название компании'
            mode='outlined'
            onChangeText={formik.handleChange('name')}
            value={formik.values.name}
          />
          <TextInput
            label='БИН'
            placeholder='БИН компании'
            mode='outlined'
            onChangeText={formik.handleChange('bin')}
            value={formik.values.bin}
          />
          <Spacer />
          <TextInput
            label='Адрес'
            placeholder='Адрес компании'
            mode='outlined'
            onChangeText={formik.handleChange('address')}
            value={formik.values.address}
          />
          <Spacer />
          <TextInput
            label='Телефон'
            placeholder='Телефон компании'
            mode='outlined'
            onChangeText={formik.handleChange('phone')}
            value={formik.values.phone}
          />
          <Spacer />
          <TextInput
            label='Email'
            placeholder='Email компании'
            mode='outlined'
            onChangeText={formik.handleChange('email')}
            value={formik.values.email}
          />
          <Spacer />
          <TextInput
            label='Вебсайт'
            placeholder='https://google.com'
            mode='outlined'
            onChangeText={formik.handleChange('website')}
            value={formik.values.website}
          />
        </Card.Content>
      </Card>
      <Spacer />
      <Button disabled={!formik.isValid || loading} mode='contained' onPress={formik.handleSubmit}>Сохранить</Button>
      <Spacer />
      <Spacer />
      <Spacer />
      <Spacer />
    </KeyboardAwareScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    padding: 10,
    flex: 1
  }
})
