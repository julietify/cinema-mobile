import React, { memo } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Title, Body1 } from "../../components/ui/typography/title"

interface ITicketsCard {
  name: String
  cinema: String
  order: String
  tickets
  onPress?: (order: String) => void
}

export const TicketsCard = memo<ITicketsCard>(({
  name,
  cinema,
  order,
  tickets,
  onPress

}) => {
  return (
    <TouchableOpacity activeOpacity={.9} onPress={() => onPress(order)}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={{width: '100%'}}>
            <Title style={styles.title}>{name}</Title>
            <View style={styles.infoContainer}>
              <Body1 style={styles.text}>{cinema}</Body1>
              <Body1 style={styles.text}>Tickets: {tickets.length}</Body1>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  container: {
    height: 90,
    marginTop: 30,
    width: '90%',
    flexDirection: 'row',
  },
  title: {
    fontSize: 15,
    margin: 10,
    width: 180,
    color:'black'
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color:'gray'
  }
})
