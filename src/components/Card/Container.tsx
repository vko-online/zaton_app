import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, IconButton, Colors, Caption } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

type State = 'expanded' | 'collapsed'
interface Props {
  title?: string;
  id: string;
  children: ReactNode;
  empty: boolean;
  emptyText: string
}
export default function Component ({ id, title, empty, emptyText, children }: Props) {
  const [state, setState] = useState<State>('expanded')

  async function toggle () {
    const val = state === 'expanded' ? 'collapsed' : 'expanded'
    setState(val)
    await AsyncStorage.setItem(`card_${id}`, val)
  }

  const mount = useCallback(async () => {
    const val = await AsyncStorage.getItem(`card_${id}`)
    if (val) {
      setState(val as State)
    }
  }, [id])

  useEffect(() => {
    mount()
  })

  const icon = {
    expanded: 'minus-box-outline',
    collapsed: 'plus-box-outline'
  }

  return (
    <Card>
      <Card.Title
        title={title}
        left={() => (
          <IconButton
            onPress={toggle}
            style={s.icon}
            color={Colors.grey700}
            icon={icon[state]}
            size={30}
          />
        )}
      />
      {
        state === 'expanded'
          ? <Card.Content>
              {
                empty
                  ? <View style={s.empty}>
                      <Caption>{emptyText}</Caption>
                    </View>
                  : children
              }
            </Card.Content>
          : null
      }
    </Card>
  )
}

const s = StyleSheet.create({
  icon: { alignSelf: 'flex-end' },
  empty: {
    alignItems: 'center',
    paddingVertical: 10
  }
})
