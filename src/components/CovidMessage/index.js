import { View, Text } from 'react-native'
import React from 'react'

import styles from './styles'

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make sure to santise</Text>
      <Text style={styles.text}>Make sure you receive packages with care, given the situation in the world. Atua will not be held liable if any user or dispatcher gets covid</Text>
      <Text style={styles.learnMore}>Learn More</Text>
    </View>
  )
}

export default CovidMessage