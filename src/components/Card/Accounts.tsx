import React from 'react'
import { List } from 'react-native-paper'
import { Account } from 'src/generated/graphql'
import Container from './Container'

interface Props {
  data?: Partial<Account>[];
  onPress?: (acc: Partial<Account>) => void;
}
export default function Screen ({ data, onPress }: Props) {
  // function handleNewPress () {
  //   navigation.dispatch(
  //     StackActions.push('Modal', { screen: 'NewClientScreen' })
  //   )
  // }

  return (
    <Container id='accounts' title='Счета' empty={!data?.length} emptyText='Нет счетов'>
      <List.Section>
        {data?.map((v) => (
          <List.Item
            key={v.id}
            onPress={onPress ? () => onPress(v) : undefined}
            title={v.name || 'Без названия'}
            description={v.iban}
            left={() => <List.Icon icon='bank' />}
            right={() => <List.Icon icon='chevron-right' />}
          />
        ))}
      </List.Section>
    </Container>
  )
}
