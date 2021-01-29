import React, { useState } from 'react'
import { FAB, Portal, Surface } from 'react-native-paper'

const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Surface>
      <Portal>
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
      </Portal>
    </Surface>
  )
}

export default MyComponent
