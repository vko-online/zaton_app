import { Client } from 'src/generated/graphql'

export type RootStackParamList = {
  Auth: undefined
  Root: undefined
  NotFound: undefined
  Modal: undefined
}

export type BottomTabParamList = {
  TabOne: undefined
  TabTwo: undefined
}

export type DrawerParamList = {
  Clients: undefined
  Invoices: undefined
  Products: undefined
  Offers: undefined
  Dashboard: undefined
  Employees: undefined
}

export type TabOneParamList = {
  TabOneScreen: undefined
}

export type TabTwoParamList = {
  TabTwoScreen: undefined
}

export type ClientsParamList = {
  ClientsScreen: undefined
  NewClientScreen: undefined
  ViewClientScreen: {
    client: Pick<Client, 'address' | 'id' | 'companyName' | 'contactFullName' | 'phone' | 'ltv' | 'email'>
  }
}

export type ProductsParamList = {
  ProductsScreen: undefined
}

export type OffersParamList = {
  OffersScreen: undefined
}

export type InvoicesParamList = {
  InvoicesScreen: undefined
}

export type DashboardParamList = {
  DashboardScreen: undefined
}

export type EmployeesParamList = {
  EmployeesScreen: undefined
}

export type NotMaybe<T> = T extends null ? T : T
