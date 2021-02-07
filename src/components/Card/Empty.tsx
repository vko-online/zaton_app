import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Caption, Card } from 'react-native-paper'

interface Props {
  title: string;
  emptyText: string;
  createText?: string;
  onPress?: () => void;
}
export default function Screen ({
  title,
  emptyText,
  createText,
  onPress
}: Props) {
  return (
    <Card>
      <Card.Title
        title={title}
        rightStyle={s.right}
        right={
          onPress
            ? () => (
                <Button onPress={onPress} mode='outlined' uppercase={false}>
                  {createText || 'Создать'}
                </Button>
              )
            : undefined
        }
      />
      <Card.Content>
        <View style={s.empty}>
          <Caption>{emptyText}</Caption>
        </View>
      </Card.Content>
    </Card>
  )
}

const s = StyleSheet.create({
  empty: {
    alignItems: 'center',
    paddingVertical: 10
  },
  right: {
    marginRight: 16
  }
})
