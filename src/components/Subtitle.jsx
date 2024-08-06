import React from 'react'
import { Text } from 'react-native'
import {styles} from '../constants'

function Subtitle({children}) {
  return (
    <Text style={styles.text.subtitle}>{children}</Text>
  )
}

export default Subtitle