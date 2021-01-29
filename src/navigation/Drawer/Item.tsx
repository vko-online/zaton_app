import React, { ReactNode } from 'react'
import { Button } from 'react-native-paper'
import { NavigationAction, useLinkProps } from '@react-navigation/native'

interface Props {
  to: string
  action?: NavigationAction
  children: ReactNode
}
export default function Component ({ to, action, children, ...rest }: Props) {
  const { onPress, ...props } = useLinkProps({ to, action })

  return (
    <Button mode='outlined' onPress={onPress} {...props} {...rest}>
      {children}
    </Button>
  )
}
