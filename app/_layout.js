import { Stack } from 'expo-router'

//подключение шрифтов
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
SplashScreen.preventAutoHideAsync()

const Layout = () => {
  //загрузка шрифтов
  const [fontsLoaded] = useFonts({
    //импорт шрифтов
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMBold: require('../assets/fonts/DMSans-Bold.ttf')
  })
  //вывод шрифтов на экран
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if (!fontsLoaded) return null

  return <Stack onLayout={ onLayoutRootView } />
}

export default Layout