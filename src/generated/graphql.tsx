import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type QueryInput = {
  query: Maybe<Scalars['String']>;
  first: Maybe<Scalars['Int']>;
  after: Maybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  users: Maybe<Array<Maybe<User>>>;
  me: Maybe<User>;
  clients: Maybe<Array<Maybe<Client>>>;
  client: Maybe<Client>;
};


export type QueryClientArgs = {
  id: Scalars['ID'];
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Maybe<Scalars['String']>;
  user: Maybe<User>;
};

export type ClientInput = {
  id: Maybe<Scalars['ID']>;
  iin: Scalars['String'];
  companyName: Scalars['String'];
  address: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  contactFullName: Maybe<Scalars['String']>;
  contactRole: Maybe<Scalars['String']>;
  note: Maybe<Scalars['String']>;
  /** Client bank accounts */
  accounts: Maybe<Array<Maybe<AccountInput>>>;
};

export type Client = {
  __typename?: 'Client';
  id: Scalars['String'];
  iin: Scalars['String'];
  companyName: Scalars['String'];
  address: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  contactFullName: Maybe<Scalars['String']>;
  contactRole: Maybe<Scalars['String']>;
  note: Maybe<Scalars['String']>;
  ltv: Maybe<Scalars['Int']>;
  accounts: Array<Account>;
  docs: Array<Doc>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  createdBy: User;
};


export type ClientAccountsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<AccountWhereUniqueInput>;
  after: Maybe<AccountWhereUniqueInput>;
};


export type ClientDocsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<DocWhereUniqueInput>;
  after: Maybe<DocWhereUniqueInput>;
};

export type DocInput = {
  sku: Maybe<Scalars['Int']>;
  offer: Scalars['Boolean'];
  template: Scalars['Boolean'];
  draft: Scalars['Boolean'];
  date: Maybe<Scalars['DateTime']>;
  dueDate: Maybe<Scalars['DateTime']>;
  clientId: Scalars['ID'];
  orders: Maybe<Array<Maybe<OrderInput>>>;
};

export type Doc = {
  __typename?: 'Doc';
  id: Scalars['String'];
  sku: Maybe<Scalars['Int']>;
  offer: Scalars['Boolean'];
  template: Scalars['Boolean'];
  draft: Scalars['Boolean'];
  date: Maybe<Scalars['DateTime']>;
  dueDate: Maybe<Scalars['DateTime']>;
  client: Maybe<Client>;
  company: Company;
  note: Maybe<Scalars['String']>;
  orders: Array<Order>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  createdBy: User;
};


export type DocOrdersArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<OrderWhereUniqueInput>;
  after: Maybe<OrderWhereUniqueInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: Maybe<AuthPayload>;
  login: Maybe<AuthPayload>;
  createCompany: Maybe<Company>;
  updateCompany: Maybe<Company>;
  createClient: Maybe<Client>;
  deleteClient: Maybe<Client>;
};


export type MutationSignupArgs = {
  data: Maybe<SignupInput>;
};


export type MutationLoginArgs = {
  data: Maybe<SigninInput>;
};


export type MutationCreateCompanyArgs = {
  data: Maybe<CompanyInput>;
};


export type MutationUpdateCompanyArgs = {
  data: Maybe<CompanyInput>;
};


export type MutationCreateClientArgs = {
  data: Maybe<ClientInput>;
};


export type MutationDeleteClientArgs = {
  id: Maybe<Scalars['ID']>;
};

export type ProductInput = {
  name: Scalars['String'];
  price: Scalars['Int'];
  unit: Maybe<Scalars['String']>;
  ltv: Maybe<Scalars['Int']>;
  description: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Int'];
  unit: Maybe<Scalars['String']>;
  ltv: Maybe<Scalars['Int']>;
  docs: Array<Doc>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  createdBy: User;
};


export type ProductDocsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<DocWhereUniqueInput>;
  after: Maybe<DocWhereUniqueInput>;
};

export type SigninInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignupInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  name: Scalars['String'];
  email: Scalars['String'];
  company: Maybe<Company>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type CompanyInput = {
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
  website: Maybe<Scalars['String']>;
  currency: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  bin: Maybe<Scalars['String']>;
  /** Company bank accounts */
  accounts: Maybe<Array<Maybe<AccountInput>>>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['String'];
  name: Scalars['String'];
  address: Scalars['String'];
  phone: Scalars['String'];
  website: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  bin: Maybe<Scalars['String']>;
  accounts: Array<Account>;
  clients: Array<Client>;
  currency: Maybe<Scalars['String']>;
  docs: Array<Doc>;
  products: Array<Product>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  owner: User;
};


export type CompanyAccountsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<AccountWhereUniqueInput>;
  after: Maybe<AccountWhereUniqueInput>;
};


export type CompanyClientsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<ClientWhereUniqueInput>;
  after: Maybe<ClientWhereUniqueInput>;
};


export type CompanyDocsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<DocWhereUniqueInput>;
  after: Maybe<DocWhereUniqueInput>;
};


export type CompanyProductsArgs = {
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<ProductWhereUniqueInput>;
  after: Maybe<ProductWhereUniqueInput>;
};

export type AccountInput = {
  iban: Scalars['String'];
  bic: Scalars['String'];
  name: Scalars['String'];
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['String'];
  iban: Scalars['String'];
  bic: Scalars['String'];
  name: Scalars['String'];
};

export type OrderInput = {
  qty: Scalars['Int'];
  productId: Scalars['ID'];
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['String'];
  qty: Scalars['Int'];
  product: Product;
};

export type AccountWhereUniqueInput = {
  id: Maybe<Scalars['String']>;
};

export type DocWhereUniqueInput = {
  id: Maybe<Scalars['String']>;
};


export type OrderWhereUniqueInput = {
  id: Maybe<Scalars['String']>;
};

export type ClientWhereUniqueInput = {
  id: Maybe<Scalars['String']>;
};

export type ProductWhereUniqueInput = {
  id: Maybe<Scalars['String']>;
};

export type SigninMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SigninMutation = (
  { __typename?: 'Mutation' }
  & { login: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  )> }
);

export type SignupMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = (
  { __typename?: 'Mutation' }
  & { signup: Maybe<(
    { __typename?: 'AuthPayload' }
    & Pick<AuthPayload, 'token'>
  )> }
);

export type ClientsQueryVariables = Exact<{ [key: string]: never; }>;


export type ClientsQuery = (
  { __typename?: 'Query' }
  & { clients: Maybe<Array<Maybe<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'companyName' | 'contactFullName' | 'address' | 'phone' | 'ltv' | 'email'>
  )>>> }
);

export type CreateClientMutationVariables = Exact<{
  data: Maybe<ClientInput>;
}>;


export type CreateClientMutation = (
  { __typename?: 'Mutation' }
  & { createClient: Maybe<(
    { __typename?: 'Client' }
    & Pick<Client, 'id'>
  )> }
);

export type ViewClientQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ViewClientQuery = (
  { __typename?: 'Query' }
  & { client: Maybe<(
    { __typename?: 'Client' }
    & Pick<Client, 'id' | 'iin' | 'companyName' | 'address' | 'phone' | 'email' | 'contactFullName' | 'contactRole' | 'note' | 'ltv' | 'createdAt'>
    & { accounts: Array<(
      { __typename?: 'Account' }
      & Pick<Account, 'id' | 'bic' | 'iban'>
    )>, docs: Array<(
      { __typename?: 'Doc' }
      & Pick<Doc, 'id' | 'date' | 'dueDate' | 'note' | 'createdAt'>
    )> }
  )> }
);


export const SigninDocument = gql`
    mutation Signin($email: String!, $password: String!) {
  login(data: {email: $email, password: $password}) {
    token
  }
}
    `;
export type SigninMutationFn = Apollo.MutationFunction<SigninMutation, SigninMutationVariables>;

/**
 * __useSigninMutation__
 *
 * To run a mutation, you first call `useSigninMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSigninMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signinMutation, { data, loading, error }] = useSigninMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSigninMutation(baseOptions?: Apollo.MutationHookOptions<SigninMutation, SigninMutationVariables>) {
        return Apollo.useMutation<SigninMutation, SigninMutationVariables>(SigninDocument, baseOptions);
      }
export type SigninMutationHookResult = ReturnType<typeof useSigninMutation>;
export type SigninMutationResult = Apollo.MutationResult<SigninMutation>;
export type SigninMutationOptions = Apollo.BaseMutationOptions<SigninMutation, SigninMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($name: String!, $email: String!, $password: String!) {
  signup(data: {name: $name, email: $email, password: $password}) {
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, baseOptions);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const ClientsDocument = gql`
    query Clients {
  clients {
    id
    companyName
    contactFullName
    address
    phone
    ltv
    email
  }
}
    `;

/**
 * __useClientsQuery__
 *
 * To run a query within a React component, call `useClientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useClientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useClientsQuery(baseOptions?: Apollo.QueryHookOptions<ClientsQuery, ClientsQueryVariables>) {
        return Apollo.useQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, baseOptions);
      }
export function useClientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClientsQuery, ClientsQueryVariables>) {
          return Apollo.useLazyQuery<ClientsQuery, ClientsQueryVariables>(ClientsDocument, baseOptions);
        }
export type ClientsQueryHookResult = ReturnType<typeof useClientsQuery>;
export type ClientsLazyQueryHookResult = ReturnType<typeof useClientsLazyQuery>;
export type ClientsQueryResult = Apollo.QueryResult<ClientsQuery, ClientsQueryVariables>;
export const CreateClientDocument = gql`
    mutation CreateClient($data: ClientInput) {
  createClient(data: $data) {
    id
  }
}
    `;
export type CreateClientMutationFn = Apollo.MutationFunction<CreateClientMutation, CreateClientMutationVariables>;

/**
 * __useCreateClientMutation__
 *
 * To run a mutation, you first call `useCreateClientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateClientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createClientMutation, { data, loading, error }] = useCreateClientMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateClientMutation(baseOptions?: Apollo.MutationHookOptions<CreateClientMutation, CreateClientMutationVariables>) {
        return Apollo.useMutation<CreateClientMutation, CreateClientMutationVariables>(CreateClientDocument, baseOptions);
      }
export type CreateClientMutationHookResult = ReturnType<typeof useCreateClientMutation>;
export type CreateClientMutationResult = Apollo.MutationResult<CreateClientMutation>;
export type CreateClientMutationOptions = Apollo.BaseMutationOptions<CreateClientMutation, CreateClientMutationVariables>;
export const ViewClientDocument = gql`
    query ViewClient($id: ID!) {
  client(id: $id) {
    id
    iin
    companyName
    address
    phone
    email
    contactFullName
    contactRole
    note
    ltv
    createdAt
    accounts {
      id
      bic
      iban
    }
    docs {
      id
      date
      dueDate
      note
      createdAt
    }
  }
}
    `;

/**
 * __useViewClientQuery__
 *
 * To run a query within a React component, call `useViewClientQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewClientQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewClientQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useViewClientQuery(baseOptions: Apollo.QueryHookOptions<ViewClientQuery, ViewClientQueryVariables>) {
        return Apollo.useQuery<ViewClientQuery, ViewClientQueryVariables>(ViewClientDocument, baseOptions);
      }
export function useViewClientLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewClientQuery, ViewClientQueryVariables>) {
          return Apollo.useLazyQuery<ViewClientQuery, ViewClientQueryVariables>(ViewClientDocument, baseOptions);
        }
export type ViewClientQueryHookResult = ReturnType<typeof useViewClientQuery>;
export type ViewClientLazyQueryHookResult = ReturnType<typeof useViewClientLazyQuery>;
export type ViewClientQueryResult = Apollo.QueryResult<ViewClientQuery, ViewClientQueryVariables>;