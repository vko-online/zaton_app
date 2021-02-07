import { Client, Product, CompanyUpdateInput } from 'src/generated/graphql'

export type RootStackParamList = {
  Auth: undefined
  Root: undefined
  NotFound: undefined
  Modal: undefined
}

export type ModalParamList = {
  Search: undefined
  Notifications: undefined
  NewClientScreen: undefined
  NewAccountScreen: undefined
  NewProductScreen: undefined
  NewOfferScreen: undefined
  NewDocScreen: undefined}

export type DrawerParamList = {
  Clients: undefined
  Invoices: undefined
  Products: undefined
  Offers: undefined
  Dashboard: undefined
  Employees: undefined
  Company: undefined
  Settings: undefined
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
  ViewProductScreen: {
    product: Product
  }
  NewProductScreen: undefined
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

export type CompanyParamList = {
  CompanyScreen: undefined
  UpdateCompanyScreen: {
    company: CompanyUpdateInput
  }
}

export type SettingsParamList = {
  SettingsScreen: undefined
}

export type NotMaybe<T> = T extends null ? T : T
