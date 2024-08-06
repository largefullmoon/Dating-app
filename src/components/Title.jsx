import React from 'react'
import { Text } from 'react-native'
import {styles} from '../constants'

function Title({children}) {
  return (
    <Text style={styles.text.title}>{children}</Text>
  )
}

export default Title