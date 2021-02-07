import { ColorSchemeName } from 'react-native'
import { DefaultTheme } from 'react-native-paper'

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

const defaultTheme: typeof DefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#304C89',
    placeholder: '#bbb'
  }
}

export function getTheme (colorScheme: ColorSchemeName): typeof DefaultTheme {
  // const currentTheme = colorScheme === 'dark' ? DarkTheme : defaultTheme
  const currentTheme = defaultTheme
  return {
    ...currentTheme,
    ...common
  }
}
