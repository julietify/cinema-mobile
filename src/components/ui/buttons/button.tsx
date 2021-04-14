import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const Button: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Buy tickets
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    width: '90%',
    marginHorizontal: '5%',
    backgroundColor: '#015EE3',
    height: 50,
    justifyContent: 'center',
    marginBottom: 15,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 17,
  }
})