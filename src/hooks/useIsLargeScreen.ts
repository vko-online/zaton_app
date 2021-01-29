import { useWindowDimensions } from 'react-native'

export default function useIsLargeScreen () {
  const dimensions = useWindowDimensions()

  const isLargeScreen = dimensions.width >= 768
  return isLargeScreen
}
