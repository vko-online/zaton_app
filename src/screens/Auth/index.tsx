import React, { useState } from 'react'
import { StyleSheet, Dimensions, SafeAreaView } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const initialLayout = { width: Dimensions.get('window').width }

export default function TabViewExample () {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'signin', title: 'Вход' },
    { key: 'signup', title: 'Регистрация' }
  ])

  const renderScene = SceneMap({
    signin: Signin,
    signup: Signup
  })

  return (
    <SafeAreaView style={s.root}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </SafeAreaView>
  )
}

const s = StyleSheet.create({
  root: {
    flex: 1
  }
})
