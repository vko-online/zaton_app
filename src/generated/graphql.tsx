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
  company: Maybe<Company>;
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
  total: Maybe<Scalars['Int']>;
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
  data: Maybe<CompanyUpdateInput>;
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
};

export type CompanyUpdateInput = {
  name: Maybe<Scalars['String']>;
  address: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  website: Maybe<Scalars['String']>;
  currency: Maybe<Scalars['String']>;
  email: Maybe<Scalars['String']>;
  bin: Maybe<Scalars['String']>;
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


export type CompanyClientsArgs = {
  where: Maybe<ClientWhereInput>;
  first: Maybe<Scalars['Int']>;
  last: Maybe<Scalars['Int']>;
  before: Maybe<ClientWhereUniqueInput>;
  after: Maybe<ClientWhereUniqueInput>;
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


export type ClientWhereInput = {
  AND: Maybe<Array<ClientWhereInput>>;
  OR: Maybe<Array<ClientWhereInput>>;
  NOT: Maybe<Array<ClientWhereInput>>;
  id: Maybe<StringFilter>;
  iin: Maybe<StringFilter>;
  companyName: Maybe<StringFilter>;
  address: Maybe<StringNullableFilter>;
  phone: Maybe<StringNullableFilter>;
  email: Maybe<StringNullableFilter>;
  contactFullName: Maybe<StringNullableFilter>;
  contactRole: Maybe<StringNullableFilter>;
  note: Maybe<StringNullableFilter>;
  ltv: Maybe<IntNullableFilter>;
  accounts: Maybe<AccountListRelationFilter>;
  docs: Maybe<DocListRelationFilter>;
  createdAt: Maybe<DateTimeFilter>;
  updatedAt: Maybe<DateTimeFilter>;
  createdBy: Maybe<UserWhereInput>;
  createdById: Maybe<StringFilter>;
  Company: Maybe<CompanyWhereInput>;
  companyId: Maybe<StringNullableFilter>;
};

export type ClientWhereUniqueInput = {
  id: Maybe<Scalars['String']>;
};

export type ProductWhereUniqueInput = {
  id: Maybe<Scalars['String']>;
};

export type StringFilter = {
  equals: Maybe<Scalars['String']>;
  in: Maybe<Array<Scalars['String']>>;
  notIn: Maybe<Array<Scalars['String']>>;
  lt: Maybe<Scalars['String']>;
  lte: Maybe<Scalars['String']>;
  gt: Maybe<Scalars['String']>;
  gte: Maybe<Scalars['String']>;
  contains: Maybe<Scalars['String']>;
  startsWith: Maybe<Scalars['String']>;
  endsWith: Maybe<Scalars['String']>;
  not: Maybe<NestedStringFilter>;
};

export type StringNullableFilter = {
  equals: Maybe<Scalars['String']>;
  in: Maybe<Array<Scalars['String']>>;
  notIn: Maybe<Array<Scalars['String']>>;
  lt: Maybe<Scalars['String']>;
  lte: Maybe<Scalars['String']>;
  gt: Maybe<Scalars['String']>;
  gte: Maybe<Scalars['String']>;
  contains: Maybe<Scalars['String']>;
  startsWith: Maybe<Scalars['String']>;
  endsWith: Maybe<Scalars['String']>;
  not: Maybe<NestedStringNullableFilter>;
};

export type IntNullableFilter = {
  equals: Maybe<Scalars['Int']>;
  in: Maybe<Array<Scalars['Int']>>;
  notIn: Maybe<Array<Scalars['Int']>>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  not: Maybe<NestedIntNullableFilter>;
};

export type AccountListRelationFilter = {
  every: Maybe<AccountWhereInput>;
  some: Maybe<AccountWhereInput>;
  none: Maybe<AccountWhereInput>;
};

export type DocListRelationFilter = {
  every: Maybe<DocWhereInput>;
  some: Maybe<DocWhereInput>;
  none: Maybe<DocWhereInput>;
};

export type DateTimeFilter = {
  equals: Maybe<Scalars['DateTime']>;
  in: Maybe<Array<Scalars['DateTime']>>;
  notIn: Maybe<Array<Scalars['DateTime']>>;
  lt: Maybe<Scalars['DateTime']>;
  lte: Maybe<Scalars['DateTime']>;
  gt: Maybe<Scalars['DateTime']>;
  gte: Maybe<Scalars['DateTime']>;
  not: Maybe<NestedDateTimeFilter>;
};

export type UserWhereInput = {
  AND: Maybe<Array<UserWhereInput>>;
  OR: Maybe<Array<UserWhereInput>>;
  NOT: Maybe<Array<UserWhereInput>>;
  id: Maybe<StringFilter>;
  name: Maybe<StringFilter>;
  email: Maybe<StringFilter>;
  password: Maybe<StringFilter>;
  company: Maybe<CompanyWhereInput>;
  createdAt: Maybe<DateTimeFilter>;
  updatedAt: Maybe<DateTimeFilter>;
  Client: Maybe<ClientListRelationFilter>;
  Product: Maybe<ProductListRelationFilter>;
  Doc: Maybe<DocListRelationFilter>;
};

export type CompanyWhereInput = {
  AND: Maybe<Array<CompanyWhereInput>>;
  OR: Maybe<Array<CompanyWhereInput>>;
  NOT: Maybe<Array<CompanyWhereInput>>;
  id: Maybe<StringFilter>;
  name: Maybe<StringFilter>;
  address: Maybe<StringFilter>;
  phone: Maybe<StringFilter>;
  website: Maybe<StringNullableFilter>;
  email: Maybe<StringNullableFilter>;
  currency: Maybe<StringNullableFilter>;
  bin: Maybe<StringNullableFilter>;
  accounts: Maybe<AccountListRelationFilter>;
  logoUrl: Maybe<StringNullableFilter>;
  stampUrl: Maybe<StringNullableFilter>;
  clients: Maybe<ClientListRelationFilter>;
  docs: Maybe<DocListRelationFilter>;
  products: Maybe<ProductListRelationFilter>;
  createdAt: Maybe<DateTimeFilter>;
  updatedAt: Maybe<DateTimeFilter>;
  owner: Maybe<UserWhereInput>;
  ownerId: Maybe<StringFilter>;
};

export type NestedStringFilter = {
  equals: Maybe<Scalars['String']>;
  in: Maybe<Array<Scalars['String']>>;
  notIn: Maybe<Array<Scalars['String']>>;
  lt: Maybe<Scalars['String']>;
  lte: Maybe<Scalars['String']>;
  gt: Maybe<Scalars['String']>;
  gte: Maybe<Scalars['String']>;
  contains: Maybe<Scalars['String']>;
  startsWith: Maybe<Scalars['String']>;
  endsWith: Maybe<Scalars['String']>;
  not: Maybe<NestedStringFilter>;
};

export type NestedStringNullableFilter = {
  equals: Maybe<Scalars['String']>;
  in: Maybe<Array<Scalars['String']>>;
  notIn: Maybe<Array<Scalars['String']>>;
  lt: Maybe<Scalars['String']>;
  lte: Maybe<Scalars['String']>;
  gt: Maybe<Scalars['String']>;
  gte: Maybe<Scalars['String']>;
  contains: Maybe<Scalars['String']>;
  startsWith: Maybe<Scalars['String']>;
  endsWith: Maybe<Scalars['String']>;
  not: Maybe<NestedStringNullableFilter>;
};

export type NestedIntNullableFilter = {
  equals: Maybe<Scalars['Int']>;
  in: Maybe<Array<Scalars['Int']>>;
  notIn: Maybe<Array<Scalars['Int']>>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  not: Maybe<NestedIntNullableFilter>;
};

export type AccountWhereInput = {
  AND: Maybe<Array<AccountWhereInput>>;
  OR: Maybe<Array<AccountWhereInput>>;
  NOT: Maybe<Array<AccountWhereInput>>;
  id: Maybe<StringFilter>;
  iban: Maybe<StringFilter>;
  bic: Maybe<StringFilter>;
  name: Maybe<StringFilter>;
  Company: Maybe<CompanyWhereInput>;
  companyId: Maybe<StringNullableFilter>;
  Client: Maybe<ClientWhereInput>;
  clientId: Maybe<StringNullableFilter>;
};

export type DocWhereInput = {
  AND: Maybe<Array<DocWhereInput>>;
  OR: Maybe<Array<DocWhereInput>>;
  NOT: Maybe<Array<DocWhereInput>>;
  id: Maybe<StringFilter>;
  sku: Maybe<IntNullableFilter>;
  offer: Maybe<BoolFilter>;
  template: Maybe<BoolFilter>;
  draft: Maybe<BoolFilter>;
  date: Maybe<DateTimeNullableFilter>;
  dueDate: Maybe<DateTimeNullableFilter>;
  client: Maybe<ClientWhereInput>;
  clientId: Maybe<StringNullableFilter>;
  company: Maybe<CompanyWhereInput>;
  companyId: Maybe<StringFilter>;
  note: Maybe<StringNullableFilter>;
  orders: Maybe<OrderListRelationFilter>;
  createdAt: Maybe<DateTimeFilter>;
  updatedAt: Maybe<DateTimeFilter>;
  createdBy: Maybe<UserWhereInput>;
  createdById: Maybe<StringFilter>;
  Product: Maybe<ProductWhereInput>;
  productId: Maybe<StringNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals: Maybe<Scalars['DateTime']>;
  in: Maybe<Array<Scalars['DateTime']>>;
  notIn: Maybe<Array<Scalars['DateTime']>>;
  lt: Maybe<Scalars['DateTime']>;
  lte: Maybe<Scalars['DateTime']>;
  gt: Maybe<Scalars['DateTime']>;
  gte: Maybe<Scalars['DateTime']>;
  not: Maybe<NestedDateTimeFilter>;
};

export type ClientListRelationFilter = {
  every: Maybe<ClientWhereInput>;
  some: Maybe<ClientWhereInput>;
  none: Maybe<ClientWhereInput>;
};

export type ProductListRelationFilter = {
  every: Maybe<ProductWhereInput>;
  some: Maybe<ProductWhereInput>;
  none: Maybe<ProductWhereInput>;
};

export type BoolFilter = {
  equals: Maybe<Scalars['Boolean']>;
  not: Maybe<NestedBoolFilter>;
};

export type DateTimeNullableFilter = {
  equals: Maybe<Scalars['DateTime']>;
  in: Maybe<Array<Scalars['DateTime']>>;
  notIn: Maybe<Array<Scalars['DateTime']>>;
  lt: Maybe<Scalars['DateTime']>;
  lte: Maybe<Scalars['DateTime']>;
  gt: Maybe<Scalars['DateTime']>;
  gte: Maybe<Scalars['DateTime']>;
  not: Maybe<NestedDateTimeNullableFilter>;
};

export type OrderListRelationFilter = {
  every: Maybe<OrderWhereInput>;
  some: Maybe<OrderWhereInput>;
  none: Maybe<OrderWhereInput>;
};

export type ProductWhereInput = {
  AND: Maybe<Array<ProductWhereInput>>;
  OR: Maybe<Array<ProductWhereInput>>;
  NOT: Maybe<Array<ProductWhereInput>>;
  id: Maybe<StringFilter>;
  name: Maybe<StringFilter>;
  unit: Maybe<StringNullableFilter>;
  description: Maybe<StringNullableFilter>;
  price: Maybe<IntFilter>;
  docs: Maybe<DocListRelationFilter>;
  ltv: Maybe<IntNullableFilter>;
  createdAt: Maybe<DateTimeFilter>;
  updatedAt: Maybe<DateTimeFilter>;
  createdBy: Maybe<UserWhereInput>;
  createdById: Maybe<StringFilter>;
  Company: Maybe<CompanyWhereInput>;
  companyId: Maybe<StringNullableFilter>;
  Order: Maybe<OrderListRelationFilter>;
};

export type NestedBoolFilter = {
  equals: Maybe<Scalars['Boolean']>;
  not: Maybe<NestedBoolFilter>;
};

export type NestedDateTimeNullableFilter = {
  equals: Maybe<Scalars['DateTime']>;
  in: Maybe<Array<Scalars['DateTime']>>;
  notIn: Maybe<Array<Scalars['DateTime']>>;
  lt: Maybe<Scalars['DateTime']>;
  lte: Maybe<Scalars['DateTime']>;
  gt: Maybe<Scalars['DateTime']>;
  gte: Maybe<Scalars['DateTime']>;
  not: Maybe<NestedDateTimeNullableFilter>;
};

export type OrderWhereInput = {
  AND: Maybe<Array<OrderWhereInput>>;
  OR: Maybe<Array<OrderWhereInput>>;
  NOT: Maybe<Array<OrderWhereInput>>;
  id: Maybe<StringFilter>;
  product: Maybe<ProductWhereInput>;
  qty: Maybe<IntFilter>;
  Doc: Maybe<DocWhereInput>;
  docId: Maybe<StringNullableFilter>;
  productId: Maybe<StringFilter>;
};

export type IntFilter = {
  equals: Maybe<Scalars['Int']>;
  in: Maybe<Array<Scalars['Int']>>;
  notIn: Maybe<Array<Scalars['Int']>>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  not: Maybe<NestedIntFilter>;
};

export type NestedIntFilter = {
  equals: Maybe<Scalars['Int']>;
  in: Maybe<Array<Scalars['Int']>>;
  notIn: Maybe<Array<Scalars['Int']>>;
  lt: Maybe<Scalars['Int']>;
  lte: Maybe<Scalars['Int']>;
  gt: Maybe<Scalars['Int']>;
  gte: Maybe<Scalars['Int']>;
  not: Maybe<NestedIntFilter>;
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
      & Pick<Account, 'id' | 'bic' | 'name' | 'iban'>
    )>, docs: Array<(
      { __typename?: 'Doc' }
      & Pick<Doc, 'id' | 'date' | 'dueDate' | 'note' | 'createdAt'>
    )> }
  )> }
);

export type UpdateCompanyMutationVariables = Exact<{
  data: Maybe<CompanyUpdateInput>;
}>;


export type UpdateCompanyMutation = (
  { __typename?: 'Mutation' }
  & { updateCompany: Maybe<(
    { __typename?: 'Company' }
    & Pick<Company, 'name' | 'address' | 'phone' | 'website' | 'email' | 'bin' | 'currency' | 'updatedAt'>
  )> }
);

export type ViewCompanyQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewCompanyQuery = (
  { __typename?: 'Query' }
  & { me: Maybe<(
    { __typename?: 'User' }
    & { company: Maybe<(
      { __typename?: 'Company' }
      & Pick<Company, 'name' | 'address' | 'phone' | 'website' | 'email' | 'bin' | 'currency' | 'updatedAt'>
      & { accounts: Array<(
        { __typename?: 'Account' }
        & Pick<Account, 'id' | 'iban' | 'bic' | 'name'>
      )>, docs: Array<(
        { __typename?: 'Doc' }
        & Pick<Doc, 'id' | 'sku' | 'offer' | 'template' | 'draft' | 'updatedAt' | 'createdAt' | 'total'>
        & { client: Maybe<(
          { __typename?: 'Client' }
          & Pick<Client, 'id' | 'companyName'>
        )> }
      )> }
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
      name
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
export const UpdateCompanyDocument = gql`
    mutation UpdateCompany($data: CompanyUpdateInput) {
  updateCompany(data: $data) {
    name
    address
    phone
    website
    email
    bin
    currency
    updatedAt
  }
}
    `;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>) {
        return Apollo.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, baseOptions);
      }
export type UpdateCompanyMutationHookResult = ReturnType<typeof useUpdateCompanyMutation>;
export type UpdateCompanyMutationResult = Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const ViewCompanyDocument = gql`
    query ViewCompany {
  me {
    company {
      name
      address
      phone
      website
      email
      bin
      accounts {
        id
        iban
        bic
        name
      }
      currency
      updatedAt
      docs {
        id
        sku
        offer
        template
        draft
        updatedAt
        createdAt
        client {
          id
          companyName
        }
        total
      }
    }
  }
}
    `;

/**
 * __useViewCompanyQuery__
 *
 * To run a query within a React component, call `useViewCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewCompanyQuery(baseOptions?: Apollo.QueryHookOptions<ViewCompanyQuery, ViewCompanyQueryVariables>) {
        return Apollo.useQuery<ViewCompanyQuery, ViewCompanyQueryVariables>(ViewCompanyDocument, baseOptions);
      }
export function useViewCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewCompanyQuery, ViewCompanyQueryVariables>) {
          return Apollo.useLazyQuery<ViewCompanyQuery, ViewCompanyQueryVariables>(ViewCompanyDocument, baseOptions);
        }
export type ViewCompanyQueryHookResult = ReturnType<typeof useViewCompanyQuery>;
export type ViewCompanyLazyQueryHookResult = ReturnType<typeof useViewCompanyLazyQuery>;
export type ViewCompanyQueryResult = Apollo.QueryResult<ViewCompanyQuery, ViewCompanyQueryVariables>;