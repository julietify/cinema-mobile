import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

interface ITicketInfromation {
  time: String
  date: String
  order: String
  cinema: String
  technology: String
  age: String
  price: String
  sited:String
}

export const TicketInformation = memo<ITicketInfromation>(({
  time,
  date,
  order,
  cinema,
  technology,
  age,
  price,
  sited
}) => {
  return (
    <View>
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
          <Text style={styles.text}>{sited}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Technology</Text>
          <Text style={styles.text}>{technology}</Text>
        </View>
        <View>
          <Text style={styles.title}>Age</Text>
          <Text style={styles.text}>{age}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Text style={styles.title}>Order</Text>
          <Text style={styles.text}>{order}</Text>
        </View>
        <View>
          <Text style={styles.title}>Price</Text>
          <Text style={styles.text}>{price}</Text>
        </View>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal:30,
    paddingVertical:20,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  firstContainer: {
    width: '65%'
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontFamily:'Courier-New',
    letterSpacing: -1,
    marginTop:8
  },
  title: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, .3)'
  }
})