import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Caption, Divider, Subheading } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { useViewClientQuery } from 'src/generated/graphql'
import { Row, Spacer } from 'src/components/Common'

import { ClientsParamList } from 'src/types'
import { RouteProp } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import Copy from 'src/components/Copy'
import OpenButton from 'src/components/OpenButton'
import Accounts from 'src/components/Card/Accounts'

interface Props {
  navigation: StackScreenProps<ClientsParamList, 'ViewClientScreen'>
  route: RouteProp<ClientsParamList, 'ViewClientScreen'>
}
export default function Screen ({
  route
}: Props) {
  const client = route.params?.client
  const { data } = useViewClientQuery({
    variables: {
      id: client.id
    }
  })

  return (
    <ScrollView contentContainerStyle={s.root}>
      <View style={s.content}>
        <Spacer />
        <Row>
          <Subheading>{client.companyName}</Subheading>
          <Text style={s.subtitle}>{`LTV ${data?.client?.ltv || '10,200'} KZT`}</Text>
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Caption>ИИН</Caption>
          <Copy data={data?.client?.iin} />
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Caption>{data?.client?.contactRole}</Caption>
          <Text>{data?.client?.contactFullName}</Text>
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Caption>Контакты</Caption>
          <View style={s.contacts}>
            <OpenButton prefix='tel' data={data?.client?.phone} />
            <OpenButton prefix='mailto' data={data?.client?.email} />
          </View>
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Caption>Адрес</Caption>
          <Text>{data?.client?.address}</Text>
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Caption>Примечание</Caption>
          <Text>{data?.client?.note}</Text>
        </Row>
      </View>
      <Spacer />
      <Accounts data={data?.client?.accounts} />
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
  contacts: {
    alignItems: 'flex-end'
  },
  subtitle: {
    fontWeight: 'bold'
  }
})
