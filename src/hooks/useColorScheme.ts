import { ColorSchemeName } from 'react-native'
// useColorScheme as _useColorScheme
export default function useColorScheme (): NonNullable<ColorSchemeName> {
  return 'light'
  // return _useColorScheme() as NonNullable<ColorSchemeName>
}
