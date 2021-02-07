import React from 'react'
import { Platform, useWindowDimensions } from 'react-native'
import {
  createDrawerNavigator,
  DrawerNavigationProp
} from '@react-navigation/drawer'
import { IconButton } from 'react-native-paper'
import {
  createStackNavigator
} from '@react-navigation/stack'
import DrawerContent from './Drawer'
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons'

import ClientsScreen from 'src/screens/Clients'
import NewClientScreen from 'src/screens/Clients/NewClient'
import ViewClientScreen from 'src/screens/Clients/ViewClient'
import ProductsScreen from 'src/screens/Products'
import OffersScreen from 'src/screens/Offers'
// import InvoicesScreen from 'src/screens/Invoices'
import EmployeesScreen from 'src/screens/Employees'
import DashboardScreen from 'src/screens/Dashboard'
import CompanyScreen from 'src/screens/Company'
import UpdateCompanyScreen from 'src/screens/Company/UpdateCompany'
import SettingsScreen from 'src/screens/Settings'
import {
  ClientsParamList,
  CompanyParamList,
  DashboardParamList,
  DrawerParamList,
  EmployeesParamList,
  // InvoicesParamList,
  OffersParamList,
  ProductsParamList,
  SettingsParamList
} from 'src/types'

const Drawer = createDrawerNavigator<DrawerParamList>()
const titleStyle = {
  fontFamily: 'montserrat-regular'
}

type Options = {
  navigation: DrawerNavigationProp<DrawerParamList>
}

const stackOptions = {
  headerBackImage: () => <IconButton icon='keyboard-backspace' />,
  headerBackTitleVisible: false
}

type DrawerType = 'front' | 'back' | 'slide' | 'permanent';
export default function DrawerNavigator () {
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
      <Drawer.Screen
        name='Dashboard'
        component={DashboardNavigator}
        options={{
          title: 'Главная',
          drawerIcon: props => <Icon name='view-dashboard' size={props.size} color={props.color} />
        }}
      />
      <Drawer.Screen
        name='Company'
        component={CompanyNavigator}
        options={{
          title: 'Моя компания',
          drawerIcon: props => <Icon name='home-city' size={props.size} color={props.color} />
        }}
      />
      <Drawer.Screen
        name='Clients'
        component={ClientsNavigator}
        options={{
          title: 'Клиенты',
          drawerIcon: props => <Icon name='account-group' size={props.size} color={props.color} />
        }}
      />
      <Drawer.Screen
        name='Products'
        component={ProductsNavigator}
        options={{
          title: 'Товары',
          drawerIcon: props => <Icon name='cart-outline' size={props.size} color={props.color} />
        }}
      />
      {/* <Drawer.Screen
        name='Invoices'
        component={InvoicesNavigator}
        options={{ title: 'Счета' }}
      /> */}
      <Drawer.Screen
        name='Employees'
        component={EmployeesNavigator}
        options={{
          title: 'Сотрудники',
          drawerIcon: props => <Icon name='shield-account' size={props.size} color={props.color} />
        }}
      />
      <Drawer.Screen
        name='Offers'
        component={OffersNavigator}
        options={{
          title: 'Коммерческие предложения',
          drawerIcon: props => <Icon name='file-document-outline' size={props.size} color={props.color} />
        }}
      />
      <Drawer.Screen
        name='Settings'
        component={SettingsNavigator}
        options={{
          title: 'Настройки',
          drawerIcon: props => <Icon name='cogs' size={props.size} color={props.color} />
        }}
      />
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
        options={({
          navigation
        }: Options) => ({
          title: 'Главная',
          headerTitleStyle: titleStyle,
          headerTitle: 'Главная',
          headerLeft: () => (
            <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
          )
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
        options={({
          navigation
        }: Options) => ({
          title: 'Клиенты',
          headerTitleStyle: titleStyle,
          headerTitle: 'Клиенты',
          headerLeft: () => (
            <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
          ),
          headerRight: () => <IconButton icon='filter' />,
          ...stackOptions
        })}
      />
      <ClientsStack.Screen
        name='NewClientScreen'
        component={NewClientScreen}
        options={({
          navigation
        }: Options) => ({
          title: 'Новый клиент',
          headerTitleStyle: titleStyle,
          headerTitle: 'Новый клиент',
          headerLeft: () => (
            <IconButton
              icon='keyboard-backspace'
              onPress={() => navigation.goBack()}
            />
          ),
          ...stackOptions
        })}
      />
      <ClientsStack.Screen
        name='ViewClientScreen'
        component={ViewClientScreen}
        options={({ navigation, route }) => ({
          title: route.params?.client?.companyName,
          headerTitleStyle: titleStyle,
          headerTitle: route.params?.client?.companyName,
          headerLeft: () => (
            <IconButton
              icon='keyboard-backspace'
              onPress={() => navigation.navigate('ClientsScreen')}
            />
          ),
          headerRight: () => <IconButton icon='share-variant' />,
          ...stackOptions
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
        options={({
          navigation
        }: Options) => ({
          title: 'Товары',
          headerLeft: () => (
            <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
          ),
          ...stackOptions
        })}
      />
    </ProductsStack.Navigator>
  )
}

// const InvoicesStack = createStackNavigator<InvoicesParamList>()
// function InvoicesNavigator () {
//   return (
//     <InvoicesStack.Navigator>
//       <InvoicesStack.Screen
//         name='InvoicesScreen'
//         component={InvoicesScreen}
//         options={({
//           navigation
//         }: Options) => ({
//           title: 'Счета',
//           headerLeft: () => (
//             <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
//           ),
//           ...stackOptions
//         })}
//       />
//     </InvoicesStack.Navigator>
//   )
// }

const OffersStack = createStackNavigator<OffersParamList>()
function OffersNavigator () {
  return (
    <OffersStack.Navigator>
      <OffersStack.Screen
        name='OffersScreen'
        component={OffersScreen}
        options={({
          navigation
        }: Options) => ({
          title: 'Коммерческие предложения',
          headerLeft: () => (
            <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
          ),
          ...stackOptions
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
        options={({
          navigation
        }: Options) => ({
          title: 'Сотрудники',
          headerLeft: () => (
            <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
          ),
          ...stackOptions
        })}
      />
    </EmployeesStack.Navigator>
  )
}

const CompanyStack = createStackNavigator<CompanyParamList>()
function CompanyNavigator () {
  return (
    <CompanyStack.Navigator>
      <CompanyStack.Screen
        name='CompanyScreen'
        component={CompanyScreen}
        options={({
          navigation
        }: Options) => ({
          title: 'Моя компания',
          headerTitleStyle: titleStyle,
          headerTitle: 'Моя компания',
          headerLeft: () => (
            <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
          ),
          ...stackOptions
        })}
      />
      <CompanyStack.Screen
        name='UpdateCompanyScreen'
        component={UpdateCompanyScreen}
        options={({
          navigation
        }: Options) => ({
          title: 'Редактирование',
          headerTitleStyle: titleStyle,
          headerTitle: 'Редактирование',
          headerBackImage: () => <IconButton icon='keyboard-backspace' />,
          headerBackTitleVisible: false
        })}
      />
    </CompanyStack.Navigator>
  )
}

const SettingsStack = createStackNavigator<SettingsParamList>()
function SettingsNavigator () {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={({
          navigation
        }: Options) => ({
          title: 'Настройки',
          headerLeft: () => (
            <IconButton icon='menu' onPress={() => navigation.openDrawer()} />
          ),
          ...stackOptions
        })}
      />
    </SettingsStack.Navigator>
  )
}
