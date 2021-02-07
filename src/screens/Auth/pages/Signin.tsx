import React from 'react'
import { StyleSheet } from 'react-native'
import { TextInput, Button, Headline, HelperText } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from 'src/types'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  SigninMutationVariables,
  useSigninMutation
} from 'src/generated/graphql'
import { useAuth } from 'src/contexts/Auth'

const schema = Yup.object().shape({
  email: Yup.string().email('Неверный email').required('Email обязательное поле'),
  password: Yup.string().required('Пароль обязательное поле')
})

export default function Screen ({
  navigation
}: StackScreenProps<RootStackParamList, 'Auth'>) {
  const [signIn] = useSigninMutation()
  const context = useAuth()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: async (values: SigninMutationVariables) => {
      try {
        const response = await signIn({
          variables: values
        })
        const token = response?.data?.login?.token
        if (token) {
          context.signIn(token)
        }
      } catch (e) {
        formik.setFieldError('email', e.message)
        console.log('e', e.message)
      }
    }
  })

  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps='always'
      contentContainerStyle={s.root}
    >
      <Headline>Вход</Headline>
      <TextInput
        value={formik.values.email}
        mode='outlined'
        label='Email'
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        keyboardType='email-address'
        autoCapitalize='none'
        error={!!(formik.touched.email && formik.errors.email)}
      />
      <HelperText
        type='error'
        visible={!!(formik.touched.email && formik.errors.email)}
      >
        {formik.errors.email}
      </HelperText>
      <TextInput
        value={formik.values.password}
        mode='outlined'
        label='Пароль'
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        autoCapitalize='none'
        error={!!(formik.touched.password && formik.errors.password)}
      />
      <HelperText
        type='error'
        visible={!!(formik.touched.password && formik.errors.password)}
      >
        {formik.errors.password}
      </HelperText>
      <Button mode='contained' onPress={formik.handleSubmit}>Войти</Button>
    </KeyboardAwareScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20
  }
})
