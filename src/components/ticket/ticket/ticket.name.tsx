import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface ITicketName {
  name:String
}

export const TicketName = memo<ITicketName>(({
  name,
}) => {
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Movie</Text>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    width:'100%'
  },
  text: {
    color:'black',
    fontSize:20,
    fontFamily:'Courier-New',
    letterSpacing:-1
  },
  title: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, .3)',
    marginBottom: 3
  }
})