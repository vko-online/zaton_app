import React from 'react'
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList
} from '@react-navigation/drawer'

export default function Component (props: DrawerContentComponentProps<DrawerContentOptions>) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
