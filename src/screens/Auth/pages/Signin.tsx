import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { TextInput, Button, Headline, HelperText } from 'react-native-paper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from 'src/types'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
  SigninDocument,
  SigninMutation,
  SigninMutationVariables
} from 'src/generated/graphql'
import AuthContext from 'src/contexts/Auth'
import { Spacer } from 'src/components/Common'
import { useMutation } from '@apollo/client'

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required()
})

export default function Screen ({
  navigation
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [signIn] = useMutation<SigninMutation, SigninMutationVariables>(
    SigninDocument
  )
  const context = useContext(AuthContext)
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
      <Headline>Sign In</Headline>
      <Spacer />
      <TextInput
        value={formik.values.email}
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
      <Spacer />
      <TextInput
        value={formik.values.password}
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
      <Spacer />
      <Button mode='contained' onPress={formik.handleSubmit}>Submit</Button>
    </KeyboardAwareScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20
  }
})
