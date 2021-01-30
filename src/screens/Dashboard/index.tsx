import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { FAB, Text, Surface } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'

import { RootStackParamList } from 'src/types'

export default function Screen ({
  navigation
}: StackScreenProps<RootStackParamList, 'NotFound'>) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Surface style={s.root}>
      <Text>Hello</Text>
      <FAB.Group
        open={isOpen}
        visible
        icon={isOpen ? 'calendar-today' : 'plus'}
        actions={[
          { icon: 'plus', onPress: () => console.log('Pressed add') },
          {
            icon: 'account-plus',
            label: 'Клиент',
            onPress: () => console.log('Pressed star')
          },
          {
            icon: 'file-pdf-box',
            label: 'Коммерческое предложение',
            onPress: () => console.log('Pressed email')
          },
          {
            icon: 'file-document',
            label: 'Счет на оплату',
            onPress: () => console.log('Pressed email')
          },
          {
            icon: 'bell',
            label: 'Remind',
            onPress: () => console.log('Pressed notifications'),
            small: false
          }
        ]}
        onStateChange={({ open }) => setIsOpen(open)}
        onPress={() => {
          if (isOpen) {
            // do something if the speed dial is open
          }
        }}
      />
    </Surface>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
