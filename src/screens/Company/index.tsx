import React, { useEffect, useState } from 'react'
import { StyleSheet, ImageBackground, View, ScrollView, RefreshControl } from 'react-native'
import {
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

  const company = data?.company

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
    <View style={s.root}>
      <ScrollView refreshControl={
        <RefreshControl refreshing={refetching} onRefresh={handleRefetch} />
      }>
        <Container empty={!company} emptyText='Нет данных' id='company' title={company?.name}>
          <Row>
            <Caption>BIN</Caption>
            <Copy data={company?.bin} />
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Caption>Адрес</Caption>
            <Text>{company?.address}</Text>
          </Row>
          <Spacer />
          <Divider />
          <Spacer />
          <Row>
            <Caption>Контакты</Caption>
            <View style={s.contacts}>
              <Text>{company?.phone}</Text>
              <Text>{company?.email}</Text>
              <Text>{company?.website}</Text>
            </View>
          </Row>
        </Container>
        <Accounts data={[{ id: '1', bic: 'KJANS1', iban: '124121', name: 'Kaspi' }]} />
        <Docs />
        <DocOffers />
        <DocTemplates />
        <DocDrafts />
        <Spacer size={40} />
      </ScrollView>
    </View>
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
    flex: 1,
    backgroundColor: '#fff'
  },
  contacts: {
    alignItems: 'flex-end'
  }
})
