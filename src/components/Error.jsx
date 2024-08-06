import React from 'react'
import { Text } from 'react-native'
import {styles} from '../constants'

function Error({children}) {
  return (
    <Text style={styles.text.error}>{children}</Text>
  )
}

export default Error