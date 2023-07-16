import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { SIZES, COLORS } from '../../../constants'

import PopularJobCard from '../../common/cards/popular/PopularJobCard'

//API
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter()

  //*CHECK* важная часть
  const { data, isLoading, err } = useFetch('search', {
    query: 'React developer',
    num_pages: '1'
  })

  return (
    <View style={ styles.container } >

      <View style={ styles.header } >
        <Text style={ styles.headerTitle } >Популярные вакансии</Text>
        <TouchableOpacity><Text style={ styles.headerBtn } >Показать всё</Text></TouchableOpacity>
      </View>

      <View styles={ styles.cardsContainer } >
        {isLoading ? ( //*CHECK* проверка на загрузку данных
          <ActivityIndicator size='large' colors={ COLORS.primary } />
        ) : err ? (
          <Text>Что-то пошло не так...</Text>
        ) : ( //*CHECK* работа с загруженными данными
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
              />
            )}
            keyExtractor={item => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            showsHorizontalScrollIndicator={false}
          /> //*CHECK* важная часть
        )} 
      </View>

    </View>
  )
}

export default Popularjobs