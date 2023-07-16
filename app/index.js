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

      <Stack.Screen //шапка с навигацией
        //вёрстка и задание стиля шапки в виде объека
        options={{
          //стиль
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          //кнопки
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={ icons.menu } dimension='60%' />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={ images.profile } dimension='100%' />
          ),
          //скрытие дефолтного заголовка
          headerTitle: ''
        }}
      />

      <ScrollView /* главный блок с прокруткой */ showsVerticalScrollIndicator={ false } >
        <View /* содержимое главного блока */ style={{ flex: 1, padding: 16 }} >
          <Welcome /* первая секция */ />
          <Popularjobs /* вторая секция */ />
          <Nearbyjobs /* третья секция */ />
        </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default Home