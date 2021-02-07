import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import { Doc } from 'src/generated/graphql'
import Container from './Container'

interface Props {
  data?: Partial<Doc>[];
  onPress?: (acc: Partial<Doc>) => void;
}
export default function Screen ({ data, onPress }: Props) {
  // const navigation = useNavigation()
  // function handleNewPress () {
  //   navigation.dispatch(StackActions.push('Modal', { screen: 'NewDocScreen' }))
  // }

  return (
    <Container title='Документы' empty={!data?.length} emptyText='Нет документов' id='docs'>
      {data?.map(v => (
        <View style={s.doc}>
          <Text>{v.client?.companyName}</Text>
        </View>
      ))}
    </Container>
  )
}

const s = StyleSheet.create({
  doc: {}
})
