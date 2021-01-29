import React from 'react'
import { Platform } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import Header from './Header'
import DrawerContent from './Drawer'

import ClientsScreen from 'src/screens/Clients'
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
import useIsLargeScreen from 'src/hooks/useIsLargeScreen'

const Drawer = createDrawerNavigator<DrawerParamList>()

const screenOptions: StackNavigationOptions = {
  header: (props) => <Header {...props} />
}

type DrawerType = 'front' | 'back' | 'slide' | 'permanent';
export default function BottomTabNavigator () {
  const isLargeScreen = useIsLargeScreen()
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
      <Drawer.Screen name='Products' component={ProductsNavigator} options={{ title: 'Товары и Услуги' }} />
      <Drawer.Screen name='Invoices' component={InvoicesNavigator} options={{ title: 'Счета' }} />
      <Drawer.Screen name='Employees' component={EmployeesNavigator} options={{ title: 'Сотрудники' }} />
      <Drawer.Screen name='Offers' component={OffersNavigator} options={{ title: 'Коммерческие предложения' }} />
    </Drawer.Navigator>
  )
}

const DashboardStack = createStackNavigator<DashboardParamList>()
function DashboardNavigator () {
  return (
    <DashboardStack.Navigator screenOptions={screenOptions}>
      <DashboardStack.Screen
        name='DashboardScreen'
        component={DashboardScreen}
        options={{ title: 'главная' }}
      />
    </DashboardStack.Navigator>
  )
}

const ClientsStack = createStackNavigator<ClientsParamList>()
function ClientsNavigator () {
  return (
    <ClientsStack.Navigator screenOptions={screenOptions}>
      <ClientsStack.Screen
        name='ClientsScreen'
        component={ClientsScreen}
        options={{ title: 'клиенты' }}
      />
    </ClientsStack.Navigator>
  )
}

const ProductsStack = createStackNavigator<ProductsParamList>()
function ProductsNavigator () {
  return (
    <ProductsStack.Navigator screenOptions={screenOptions}>
      <ProductsStack.Screen
        name='ProductsScreen'
        component={ProductsScreen}
        options={{ title: 'товары и услуги' }}
      />
    </ProductsStack.Navigator>
  )
}

const InvoicesStack = createStackNavigator<InvoicesParamList>()
function InvoicesNavigator () {
  return (
    <InvoicesStack.Navigator screenOptions={screenOptions}>
      <InvoicesStack.Screen
        name='InvoicesScreen'
        component={InvoicesScreen}
        options={{ title: 'счета' }}
      />
    </InvoicesStack.Navigator>
  )
}

const OffersStack = createStackNavigator<OffersParamList>()
function OffersNavigator () {
  return (
    <OffersStack.Navigator screenOptions={screenOptions}>
      <OffersStack.Screen
        name='OffersScreen'
        component={OffersScreen}
        options={{ title: 'коммерческие предложения' }}
      />
    </OffersStack.Navigator>
  )
}

const EmployeesStack = createStackNavigator<EmployeesParamList>()
function EmployeesNavigator () {
  return (
    <EmployeesStack.Navigator screenOptions={screenOptions}>
      <EmployeesStack.Screen
        name='EmployeesScreen'
        component={EmployeesScreen}
        options={{ title: 'коммерческие предложения' }}
      />
    </EmployeesStack.Navigator>
  )
}
