import React from 'react'
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'
import AuthContext from 'src/contexts/Auth'

interface Props extends DrawerContentComponentProps<DrawerContentOptions> {}
export default function Component (props: Props) {
  // const context = useAuth()
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <AuthContext.Consumer>
        {({ signOut }) => (
          <DrawerItem
            label='Выход'
            onPress={() => {
              signOut()
              // props.navigation.dispatch(StackActions.replace('Auth'))
            }}
            icon={p => <Icon name='power' size={p.size} color={p.color} />}
          />
        )}
      </AuthContext.Consumer>
    </DrawerContentScrollView>
  )
}
