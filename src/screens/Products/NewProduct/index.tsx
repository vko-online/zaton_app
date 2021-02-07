import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Spacer } from 'src/components/Common'
import { ClientsParamList } from 'src/types'
import { useCreateProductMutation } from 'src/generated/graphql'

const schema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.string().required(),
  unit: Yup.string().optional(),
  description: Yup.string().optional()
})
const initialValues = {
  name: '',
  price: '0',
  unit: '',
  description: ''
}
export default function Screen ({
  navigation
}: StackScreenProps<ClientsParamList, 'NewClientScreen'>) {
  const [create, { loading }] = useCreateProductMutation()
  const formik = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: async (values) => {
      try {
        const response = await create({
          variables: {
            data: {
              description: values.description,
              name: values.name,
              unit: values.unit,
              price: Number(values.price)
            }
          }
        })
        console.log('response', response)
        navigation.goBack()
      } catch (e) {
        console.log('error', e.message)
      }
    }
  })

  return (
    <View style={s.root}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps='always'>
        <TextInput
          label='Наименование'
          placeholder='Наименование товара'
          mode='outlined'
          onChangeText={formik.handleChange('name')}
          value={formik.values.name}
        />
        <Spacer />
        <TextInput
          label='Цена'
          placeholder='Цена за единицу'
          mode='outlined'
          onChangeText={formik.handleChange('price')}
          value={formik.values.price}
        />
        <Spacer />
        <TextInput
          label='Единица'
          placeholder='Единица измерения'
          mode='outlined'
          onChangeText={formik.handleChange('unit')}
          value={formik.values.unit}
        />
        <Spacer />
        <TextInput
          label='Описание'
          placeholder='Описание товара'
          mode='outlined'
          onChangeText={formik.handleChange('description')}
          value={formik.values.description}
        />
        <Spacer />
        <Button loading={loading} disabled={!formik.isValid || loading} mode='contained' onPress={formik.handleSubmit}>Создать</Button>
      </KeyboardAwareScrollView>
    </View>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  }
})
