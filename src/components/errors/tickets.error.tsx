import React, { FC } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export const TicketsError: FC = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.image} 
        source={{uri: 'https://i.ibb.co/kMR1ghp/Group-66.png'}}
      />
      <Text style={styles.text}>You do not have any tickets</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image : {
    width: 150, 
    height: 150,
    marginBottom: 50,
  },
  text: {
    fontSize: 16
  }
})