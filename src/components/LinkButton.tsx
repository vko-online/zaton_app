import { NavigationAction, useLinkProps } from '@react-navigation/native'
import React, { ReactNode } from 'react'
import { Button } from 'react-native-paper'

interface Props {
  to: string
  action?: NavigationAction
  children: ReactNode
}
const LinkButton = ({ to, action, children, ...rest }: Props) => {
  const { onPress, ...props } = useLinkProps({ to, action })

  return (
    <Button mode='outlined' onPress={onPress} {...props} {...rest}>
      {children}
    </Button>
  )
}

export default LinkButton
