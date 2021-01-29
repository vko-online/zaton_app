import { ColorSchemeName } from 'react-native'
import { DefaultTheme, DarkTheme } from 'react-native-paper'

const common: Partial<typeof DefaultTheme> = {
  mode: 'adaptive',
  roundness: 3,
  fonts: {
    light: {
      fontFamily: 'montserrat-light'
    },
    medium: {
      fontFamily: 'montserrat-medium'
    },
    regular: {
      fontFamily: 'montserrat-regular'
    },
    thin: {
      fontFamily: 'montserrat-thin'
    }
  }
}

export function getTheme (colorScheme: ColorSchemeName): typeof DefaultTheme {
  const currentTheme = colorScheme === 'dark' ? DarkTheme : DefaultTheme
  return {
    ...currentTheme,
    ...common
  }
}
