import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface ITicketInfromation {
  time: String
  date: String
  order: String
  cinema: String
  technology: String
  seat: String
  name: String
}

export const TicketInformation = memo<ITicketInfromation>(({
  time,
  date,
  order,
  cinema,
  technology,
  seat,
  name
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.nameContainer}>
        <Text style={styles.textName}>Movie : {name}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Date</Text>
          <Text style={styles.text}>{date}</Text>
        </View>
        <View>
          <Text style={styles.title}>Time</Text>
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Cinema</Text>
          <Text style={styles.text}>{cinema}</Text>
        </View>
        <View>
          <Text style={styles.title}>Seat</Text>
          <Text style={styles.text}>{seat}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Technology</Text>
          <Text style={styles.text}>{technology}</Text>
        </View>
        <View>
          <Text style={styles.title}>Order</Text>
          <Text style={styles.text}>{order}</Text>
        </View>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'white',
    paddingHorizontal:30,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
  },
  nameContainer: {
    paddingTop:30,
    paddingBottom:10,
  },
  textName: {
    color:'#1E1851',
    fontWeight:'700',
    fontSize:17,
  },
  container: {
    width: '100%',
    paddingVertical: 20,
    flexDirection: 'row',
  },
  firstContainer: {
    width: '65%'
  },
  text: {
    color: '#1E1851',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 8
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, .3)'
  }
})