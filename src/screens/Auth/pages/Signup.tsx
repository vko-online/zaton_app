import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { TextInput, Button, Headline, HelperText } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from 'src/types'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  SignupMutationVariables,
  useSignupMutation
} from 'src/generated/graphql'
import AuthContext from 'src/contexts/Auth'

const schema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

export default function Screen ({
  navigation
}: StackScreenProps<RootStackParamList, 'Auth'>) {
  const [signIn] = useSignupMutation()
  const context = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: schema,
    onSubmit: async (values: SignupMutationVariables) => {
      try {
        const response = await signIn({
          variables: values
        })
        const token = response?.data?.signup?.token
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
      <Headline>Регистрация</Headline>
      <TextInput
        value={formik.values.name}
        mode='outlined'
        label='Имя'
        onChangeText={formik.handleChange('name')}
        onBlur={formik.handleBlur('name')}
        autoCapitalize='words'
        error={!!(formik.touched.name && formik.errors.name)}
      />
      <HelperText
        type='error'
        visible={!!(formik.touched.name && formik.errors.name)}
      >
        {formik.errors.name}
      </HelperText>
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
      <Button mode='contained' onPress={formik.handleSubmit}>Зарегистрироваться</Button>
    </KeyboardAwareScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20
  }
})
