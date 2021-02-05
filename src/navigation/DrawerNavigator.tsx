import React from 'react'
import { Platform, useWindowDimensions } from 'react-native'
import { createDrawerNavigator, DrawerNavigationProp } from '@react-navigation/drawer'
import { IconButton } from 'react-native-paper'
import { createStackNavigator } from '@react-navigation/stack'
import DrawerContent from './Drawer'

import ClientsScreen from 'src/screens/Clients'
import NewClientScreen from 'src/screens/Clients/NewClient'
import ViewClientScreen from 'src/screens/Clients/ViewClient'
import ProductsScreen from 'src/screens/Products'
import OffersScreen from 'src/screens/Offers'
import InvoicesScreen from 'src/screens/Invoices'
import EmployeesScreen from 'src/screens/Employees'
import DashboardScreen from 'src/screens/Dashboard'
import {
  ClientsParamList,
  DashboardParamList,
  DrawerParamList,
  EmployeesParamList,
  InvoicesParamList,
  OffersParamList,
  ProductsParamList
} from 'src/types'

const Drawer = createDrawerNavigator<DrawerParamList>()
const titleStyle = {
  fontFamily: 'montserrat-regular'
}

interface DrawerOptionProps {
  navigation: DrawerNavigationProp<DrawerParamList>
}

type DrawerType = 'front' | 'back' | 'slide' | 'permanent';
export default function BottomTabNavigator () {
  const dimensions = useWindowDimensions()
  const isLargeScreen = dimensions.width >= 768
  const drawerType = Platform.select<DrawerType>({
    web: isLargeScreen ? 'permanent' : 'front',
    default: 'front'
  })

  return (
    <Drawer.Navigator
      openByDefault={isLargeScreen}
      drawerType={drawerType}
      drawerContent={DrawerContent}
    >
      <Drawer.Screen name='Dashboard' component={DashboardNavigator} options={{ title: 'Главная' }} />
      <Drawer.Screen name='Clients' component={ClientsNavigator} options={{ title: 'Клиенты' }} />
      <Drawer.Screen name='Products' component={ProductsNavigator} options={{ title: 'Товары' }} />
      <Drawer.Screen name='Invoices' component={InvoicesNavigator} options={{ title: 'Счета' }} />
      <Drawer.Screen name='Employees' component={EmployeesNavigator} options={{ title: 'Сотрудники' }} />
      <Drawer.Screen name='Offers' component={OffersNavigator} options={{ title: 'Коммерческие предложения' }} />
    </Drawer.Navigator>
  )
}

const DashboardStack = createStackNavigator<DashboardParamList>()
function DashboardNavigator () {
  return (
    <DashboardStack.Navigator>
      <DashboardStack.Screen
        name='DashboardScreen'
        component={DashboardScreen}
        options={({ navigation }: DrawerOptionProps) => ({
          title: 'Главная',
          headerLeft: () => <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
        })}
      />
    </DashboardStack.Navigator>
  )
}

const ClientsStack = createStackNavigator<ClientsParamList>()
function ClientsNavigator () {
  return (
    <ClientsStack.Navigator initialRouteName='ClientsScreen'>
      <ClientsStack.Screen
        name='ClientsScreen'
        component={ClientsScreen}
        options={({ navigation }: DrawerOptionProps) => ({
          title: 'Клиенты',
          headerTitleStyle: titleStyle,
          headerTitle: 'Клиенты',
          headerLeft: () => <IconButton icon='menu' onPress={() => navigation.openDrawer()} />,
          headerRight: () => <IconButton icon='filter' />
        })}
      />
      <ClientsStack.Screen
        name='NewClientScreen'
        component={NewClientScreen}
        options={({ navigation }) => ({
          title: 'Новый клиент',
          headerTitleStyle: titleStyle,
          headerTitle: 'Новый клиент',
          headerLeft: () => <IconButton icon='keyboard-backspace' onPress={() => navigation.navigate('ClientsScreen')} />
        })}
      />
      <ClientsStack.Screen
        name='ViewClientScreen'
        component={ViewClientScreen}
        options={({ navigation, route }) => ({
          title: route.params?.client?.companyName,
          headerTitleStyle: titleStyle,
          headerTitle: route.params?.client?.companyName,
          headerLeft: () => <IconButton icon='keyboard-backspace' onPress={() => navigation.navigate('ClientsScreen')} />,
          headerRight: () => <IconButton icon='share-variant' />
        })}
      />
    </ClientsStack.Navigator>
  )
}

const ProductsStack = createStackNavigator<ProductsParamList>()
function ProductsNavigator () {
  return (
    <ProductsStack.Navigator>
      <ProductsStack.Screen
        name='ProductsScreen'
        component={ProductsScreen}
        options={({ navigation }: DrawerOptionProps) => ({
          title: 'Товары',
          headerLeft: () => <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
        })}
      />
    </ProductsStack.Navigator>
  )
}

const InvoicesStack = createStackNavigator<InvoicesParamList>()
function InvoicesNavigator () {
  return (
    <InvoicesStack.Navigator>
      <InvoicesStack.Screen
        name='InvoicesScreen'
        component={InvoicesScreen}
        options={({ navigation }: DrawerOptionProps) => ({
          title: 'Счета',
          headerLeft: () => <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
        })}
      />
    </InvoicesStack.Navigator>
  )
}

const OffersStack = createStackNavigator<OffersParamList>()
function OffersNavigator () {
  return (
    <OffersStack.Navigator>
      <OffersStack.Screen
        name='OffersScreen'
        component={OffersScreen}
        options={({ navigation }: DrawerOptionProps) => ({
          title: 'Коммерческие предложения',
          headerLeft: () => <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
        })}
      />
    </OffersStack.Navigator>
  )
}

const EmployeesStack = createStackNavigator<EmployeesParamList>()
function EmployeesNavigator () {
  return (
    <EmployeesStack.Navigator>
      <EmployeesStack.Screen
        name='EmployeesScreen'
        component={EmployeesScreen}
        options={({ navigation }: DrawerOptionProps) => ({
          title: 'Сотрудники',
          headerLeft: () => <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
        })}
      />
    </EmployeesStack.Navigator>
  )
}
