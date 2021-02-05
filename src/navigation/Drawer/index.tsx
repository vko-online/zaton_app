import React from 'react'
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

interface Props extends DrawerContentComponentProps<DrawerContentOptions> {}
export default function Component (props: Props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
