import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'

import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

//API
import useFetch from '../../../hook/useFetch'

const Nearbyjobs = () => {
  const router = useRouter()

  //*CHECK* важная часть
  const { data, isLoading, err } = useFetch('search', {
    query: 'React developer',
    num_pages: '1'
  })

  return (
    <View style={ styles.container } >

      <View style={ styles.header } >
        <Text style={ styles.headerTitle } >Вакансии рядом</Text>
        <TouchableOpacity><Text style={ styles.headerBtn } >Показать всё</Text></TouchableOpacity>
      </View>

      <View styles={ styles.cardsContainer } >
        {isLoading ? ( //*CHECK* проверка на загрузку данных
          <ActivityIndicator size='large' colors={ COLORS.primary } />
        ) : err ? (
          <Text>Что-то пошло не так...</Text>
        ) : ( //*CHECK* работа с загруженными данными
          data?.map((job) => (
            <NearbyJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigation={() => router.push(`/job-details/${job.job_id}`)}
            />
          ))
        )}
      </View>

    </View>
  )
}

export default Nearbyjobs