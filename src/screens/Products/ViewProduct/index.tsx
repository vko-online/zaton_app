import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Caption, Subheading, Divider } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { useViewProductQuery } from 'src/generated/graphql'
import { Row, Spacer } from 'src/components/Common'

import { ProductsParamList } from 'src/types'
import { RouteProp } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

interface Props {
  navigation: StackScreenProps<ProductsParamList, 'ViewProductScreen'>
  route: RouteProp<ProductsParamList, 'ViewProductScreen'>
}
export default function Screen ({
  route
}: Props) {
  const product = route.params?.product
  const { data } = useViewProductQuery({
    variables: {
      id: product.id
    }
  })

  return (
    <ScrollView contentContainerStyle={s.root}>
      <View style={s.content}>
        <Spacer />
        <Row>
          <Subheading>{data?.product?.name}</Subheading>
          <Text style={s.subtitle}>{`LTV ${data?.product?.ltv || '10,200'} KZT`}</Text>
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Caption>Цена</Caption>
          <Text>{data?.product?.price}</Text>
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Caption>Единица измерения</Caption>
          <Text>{data?.product?.unit}</Text>
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Caption>Описание</Caption>
          <Text>{data?.product?.description}</Text>
        </Row>
      </View>
      <Spacer />
    </ScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 10
  },
  subtitle: {
    fontWeight: 'bold'
  }
})
