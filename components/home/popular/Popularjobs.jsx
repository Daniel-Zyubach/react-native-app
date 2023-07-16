import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './popularjobs.style'
import { SIZES, COLORS } from '../../../constants'

import PopularJobCard from '../../common/cards/popular/PopularJobCard'

const Popularjobs = () => {
  const router = useRouter()
  //*CHECK* важная часть
  const isLoading = false
  const err = false

  return (
    <View style={ styles.container } >

      <View style={ styles.header } >
        <Text style={ styles.headerTitle } >Популярные вакансии</Text>
        <TouchableOpacity><Text style={ styles.headerBtn } >Показать всё</Text></TouchableOpacity>
      </View>

    </View>
  )
}

export default Popularjobs