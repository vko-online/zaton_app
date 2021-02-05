import React from 'react'
import { StyleSheet, View } from 'react-native'
import { List, Text, ActivityIndicator, Headline, Caption } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { useViewClientQuery } from 'src/generated/graphql'
import { format } from 'date-fns'
import { ru } from 'date-fns/locale'
import { Row } from 'src/components/Common'

import { ClientsParamList } from 'src/types'
import { RouteProp } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

interface Props {
  navigation: StackScreenProps<ClientsParamList, 'ViewClientScreen'>
  route: RouteProp<ClientsParamList, 'ViewClientScreen'>
}
export default function Screen ({
  navigation,
  route
}: Props) {
  const client = route.params?.client
  const { loading, data } = useViewClientQuery({
    variables: {
      id: client.id
    }
  })

  console.log('data', data)

  return (
    <ScrollView contentContainerStyle={s.root}>
      <Row>
        <Headline>{client.companyName}</Headline>
        <View style={s.ltv}>
          <Text>{client.ltv || '153,400.00'} ₸</Text>
        </View>
      </Row>
      {
        loading
          ? <ActivityIndicator />
          : <>
              <Text>{client.contactFullName}</Text>
              <Text>{client.address}</Text>
              <Text>{client.email}</Text>
              <Text>{client.phone}</Text>
              <Caption>{data?.client?.contactRole}</Caption>
              <List.Section>
                <List.Subheader>Документы</List.Subheader>
                {data?.client?.docs?.map(v => (
                  <List.Item
                    title={v.id}
                    key={v.id}
                    description={format(new Date(v.createdAt), 'PPPP', { locale: ru })}
                    left={() => <List.Icon color='#000' icon='bank' />}
                  />
                ))}
                <List.Subheader>Счета</List.Subheader>
                {data?.client?.accounts?.map(v => (
                  <List.Item
                    title='kaspi'
                    key={v.id}
                    description={v.iban}
                    left={() => <List.Icon color='#000' icon='bank' />}
                    right={() => <List.Icon color='#000' icon='content-copy' />}
                  />
                ))}
              </List.Section>
              <Caption>{format(new Date(data?.client?.createdAt), 'PPPP', { locale: ru })}</Caption>
            </>
      }
    </ScrollView>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20
  },
  ltv: {
    alignSelf: 'flex-start',
    alignItems: 'flex-end',
    padding: 10,
    minWidth: 100,
    borderStyle: 'dashed',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5
  }
})
