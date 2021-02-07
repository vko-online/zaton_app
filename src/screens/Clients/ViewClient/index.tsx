import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text, Card, Divider, Subheading } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { useViewClientQuery } from 'src/generated/graphql'
import { Row, Spacer } from 'src/components/Common'

import { ClientsParamList } from 'src/types'
import { RouteProp } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import Copy from 'src/components/Copy'
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
      <Card>
        <Card.Title title={client.companyName} />
        <Card.Content>
          <Row>
            <Subheading>Наименование</Subheading>
            <Text>{data?.client?.companyName}</Text>
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Subheading>ИИН</Subheading>
            <Copy data={data?.client?.iin} />
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Subheading>{data?.client?.contactRole}</Subheading>
            <Text>{data?.client?.contactFullName}</Text>
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Subheading>Контакты</Subheading>
            <View style={s.contacts}>
              <Text>{data?.client?.phone}</Text>
              <Text>{data?.client?.email}</Text>
            </View>
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Subheading>Адрес</Subheading>
            <Text>{data?.client?.address}</Text>
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Subheading>Примечание</Subheading>
            <Text>{data?.client?.note}</Text>
          </Row>
        </Card.Content>
      </Card>
      <Spacer />
      <Accounts data={data?.client?.accounts} />
    </ScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20
  },
  contacts: {
    alignItems: 'flex-end'
  }
})
