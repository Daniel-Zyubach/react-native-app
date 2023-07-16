//импорт состояния
import { useState } from "react"
//импорт реакт нэтив компонентов
import { View, Text, ScrollView, SafeAreaView } from "react-native"
//импорт навигации
import { Stack, useRouter } from "expo-router"

//импорт оформления
import { SIZES, COLORS, icons, images } from '../constants'
//импорт функциональных компонентов приложения
import { ScreenHeaderBtn, Welcome, Popularjobs, Nearbyjobs } from '../components'

const Home = () => {
  //определяем маршрутизатор
  const router = useRouter()

  return (
    //оборачивание в безопасную зону видимости
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>

    </SafeAreaView>
  )
}

export default Home