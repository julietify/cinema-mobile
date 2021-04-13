import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface IFilmHistory {
  story:string
}
export const FIlmHistory = memo<IFilmHistory>(({
  story
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
      Storyline
      </Text>
      <Text style={styles.text}>{story}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    width: '85%',
    marginHorizontal:'7.5%',
    marginTop:30,
  },
  title: {
    color:'#fff',
    fontSize: 17,
    marginBottom:10,
    letterSpacing:1,
  },
  text:{
    color:'#C8C8C8',
    fontSize:15,
    letterSpacing:0.5,
    textShadowOffset: {width: 0, height: 0},
    textShadowRadius: 5,
    marginBottom:20,
  }
})