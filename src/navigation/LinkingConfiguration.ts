import * as Linking from 'expo-linking'

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Dashboard: {
            screens: {
              DashboardScreen: 'dashboard'
            }
          },
          Clients: {
            screens: {
              ClientsScreen: 'clients',
              NewClientScreen: 'clients/new'
            }
          },
          Products: {
            screens: {
              ProductsScreen: 'products'
            }
          },
          Offers: {
            screens: {
              OffersScreen: 'offers'
            }
          },
          Invoices: {
            screens: {
              InvoicesScreen: 'invoices'
            }
          }
        }
      },
      Modal: {
        screens: {
          Search: 'search',
          Notifications: 'notifications'
        }
      },
      NotFound: '*'
    }
  }
}
