import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const app = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Text}>welcome to Skillsync</Text>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  Text: {
    position: 'absolute',
    top: 370,
    color: 'black',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})
