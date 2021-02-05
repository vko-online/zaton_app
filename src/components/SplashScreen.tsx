import React from 'react'
import { Dimensions, Image, StyleSheet } from 'react-native'

const { width, height } = Dimensions.get('screen')

export default function Component () {
  return <Image style={s.splash} source={require('src/assets/images/splash.png')} />
}

const s = StyleSheet.create({
  splash: {
    width,
    height
  }
})
