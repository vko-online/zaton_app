import React, { ReactNode } from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'

export const Spacer = () => <View style={s.spacer} />
export const Flex = () => <View style={s.flex} />

interface RowProps {
  children: ReactNode
  style?: StyleProp<ViewStyle>
}
export const Row = ({ children, style }: RowProps) => <View style={[s.row, style]}>{children}</View>

const s = StyleSheet.create({
  spacer: {
    height: 10
  },
  flex: {
    flex: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
