import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Title, Text, Colors, Card, Divider, Subheading } from 'react-native-paper'
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
      <Card>
        <Row style={s.row}>
          <Title>{client.companyName}</Title>
          {/* <Card.Title title={client.companyName} style={{ alignSelf: 'flex-start' }} /> */}
          <Text style={s.subtitle}>{`LTV ${data?.client?.ltv || '10,200'} KZT`}</Text>
        </Row>
        <Card.Content>
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
              <OpenButton prefix='tel' data={data?.client?.phone} />
              <OpenButton prefix='mailto' data={data?.client?.email} />
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
    padding: 10
  },
  contacts: {
    alignItems: 'flex-end'
  },
  row: {
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  subtitle: {
    fontWeight: 'bold',
    color: Colors.blue600,
    fontFamily: 'montserrat-bold'
  }
})
