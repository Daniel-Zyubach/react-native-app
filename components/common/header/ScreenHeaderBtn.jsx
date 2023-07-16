//кнопки навигации

import React from 'react'
import { TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

//передаём пропсами значения
const ScreenHeaderBtn = ({ iconUrl, dimension }) => {
  return (
    //оборачиваем в реакт нэтив-компонент кнопки и задаём стили отображения
    <TouchableOpacity style={ styles.btnContainer } >
      <Image //содержимое кнопки
        source={ iconUrl }
        style={ styles.btnImg( dimension ) }
        resizeMode='cover'
      />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn