import React, { ReactNode, useCallback, useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { IconButton, Colors, Caption, Text } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Row } from 'src/components/Common'

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
    <View style={s.root}>
      <Row style={s.row}>
        <Text>{title}</Text>
        <IconButton
          onPress={toggle}
          style={s.icon}
          color={Colors.grey400}
          icon={icon[state]}
          size={20}
        />
      </Row>
      {
        state === 'expanded'
          ? <View style={s.content}>
              {
                empty
                  ? <View style={s.empty}>
                      <Caption>{emptyText}</Caption>
                    </View>
                  : children
              }
            </View>
          : null
      }
    </View>
  )
}

const s = StyleSheet.create({
  root: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  row: {
    paddingLeft: 10
  },
  icon: {
    alignSelf: 'flex-end'
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 10
  }
})
