import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, View, ScrollView, RefreshControl } from 'react-native'
import {
  Subheading,
  Text,
  ActivityIndicator,
  Button,
  Divider,
  Headline,
  Paragraph,
  Title,
  Caption
} from 'react-native-paper'
import { useViewCompanyQuery } from 'src/generated/graphql'
import Accounts from 'src/components/Card/Accounts'
import DocTemplates from 'src/components/Card/DocTemplates'
import DocOffers from 'src/components/Card/DocOffers'
import DocDrafts from 'src/components/Card/DocDrafts'
import Docs from 'src/components/Card/Docs'
import NavButton from 'src/components/NavButton'
import Copy from 'src/components/Copy'

import { Spacer, Row } from 'src/components/Common'
import { StackNavigationProp } from '@react-navigation/stack'
import { CompanyParamList } from 'src/types'
import Container from 'src/components/Card/Container'

interface Props {
  navigation: StackNavigationProp<CompanyParamList, 'CompanyScreen'>;
}
export default function Screen ({ navigation }: Props) {
  const { loading, data, refetch } = useViewCompanyQuery()
  const [refetching, setRefetching] = useState(false)

  async function handleRefetch () {
    setRefetching(true)
    await refetch()
    setRefetching(false)
  }

  const company = data?.me?.company

  useEffect(() => {
    if (company) {
      navigation.setOptions({
        headerRight: () => (
          <NavButton title='Изменить' onPress={() => navigation.navigate('UpdateCompanyScreen', { company }) } />
        )
      })
    }
  }, [company, navigation])

  if (loading) {
    return (
      <View style={s.full}>
        <ActivityIndicator size='large' />
      </View>
    )
  }

  if (!loading && !company) {
    return (
      <ImageBackground style={s.image} source={require('src/assets/images/header_background.png')}>
        <Title>Добро пожаловать</Title>
        <Spacer />
        <Headline>У вас нет компании</Headline>
        <Spacer />
        <Paragraph>
          Offero is a powerful, safe, and easy-to-use platform for forming a company.
        </Paragraph>
        <Spacer />
        <Caption>Абсолютно бесплатно</Caption>
        <Spacer />
        <Button color='#32325d' mode='contained'>начни свою компанию</Button>
      </ImageBackground>
    )
  }

  return (
    <ScrollView refreshControl={
      <RefreshControl refreshing={refetching} onRefresh={handleRefetch} />
    } contentContainerStyle={s.root}>
      <Container empty={!company} emptyText='Нет данных' id='company' title={company?.name}>
        <Row>
          <Subheading>BIN</Subheading>
          <Copy data={company?.bin} />
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Subheading>Адрес</Subheading>
          <Text>{company?.address}</Text>
        </Row>
        <Spacer />
        <Divider />
        <Spacer />
        <Row>
          <Subheading>Контакты</Subheading>
          <View style={s.contacts}>
            <Text>{company?.phone}</Text>
            <Text>{company?.email}</Text>
            <Text>{company?.website}</Text>
          </View>
        </Row>
      </Container>
      <Spacer />
      <Accounts data={[{ id: '1', bic: 'KJANS1', iban: '124121', name: 'Kaspi' }]} />
      <Spacer />
      <Docs />
      <Spacer />
      <DocOffers />
      <Spacer />
      <DocTemplates />
      <Spacer />
      <DocDrafts />
      <Spacer size={40} />
    </ScrollView>
  )
}

const s = StyleSheet.create({
  full: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    flex: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  },
  root: {
    padding: 10
  },
  contacts: {
    alignItems: 'flex-end'
  }
})
