import React from 'react'
import { Text, View } from 'react-native'
import styles from '../style/Style'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={[styles.title, styles.customFont]}>
        Mini-Yahtzee
      </Text>
    </View>
  )
}