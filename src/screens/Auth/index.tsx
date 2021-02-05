import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

const initialLayout = { width: Dimensions.get('window').width }

export default function TabViewExample () {
  const [index, setIndex] = useState(0)
  const [routes] = useState([
    { key: 'signin', title: 'Sign in' },
    { key: 'signup', title: 'Sign up' }
  ])

  const renderScene = SceneMap({
    signin: Signin,
    signup: Signup
  })

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  )
}
