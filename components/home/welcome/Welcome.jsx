import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'

const jobTypes = ['Full-time', 'Part-time', 'Contractor']

const Welcome = () => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      
      <View style={ styles.container } /* приветсвие */ >

        <Text style={ styles.userName } >Привет!</Text>
        <Text style={ styles.welcomeMessage } >Найди свою идеальную работу</Text>

      </View>

      <View style={ styles.searchContainer } /* форма поиска */ >

        <View style={ styles.searchWrapper } /* ввод */ >
          <TextInput style={ styles.searchInput }
            placeholder='Какую работу ты ещешь?'
            value=''
          />
        </View>

        <TouchableOpacity style={ styles.searchBtn } /* кнопка поиска */
          onPress={() => {}}
        >
          <Image source={ icons.search } resizeMode='contain' style={ styles.searchBtnImage } />
        </TouchableOpacity>

      </View>

      <View style={ styles.tabsContainer /* вкладки-фильтры */ }>

        <FlatList
          data={ jobTypes }
          renderItem={({ item }) => (
            <TouchableOpacity style={ styles.tab(activeJobType, item) }
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}
            >
              <Text style={ styles.tabText(activeJobType, item) } >{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
          showsHorizontalScrollIndicator={false}
        />

      </View>

    </View>
  )
}

export default Welcome