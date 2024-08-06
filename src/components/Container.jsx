import React from 'react'
import { styles } from '../constants'
import { View } from 'react-native'

function Container({children}) {
  return (
    <View style={styles.container}>{children}</View>
  )
}

export default Container