import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Title1 } from '../../ui/typography/title'
import { palette } from '../../../theme/palette'

interface ITicketInfromation {
  time: string
  date: string
  order: string
  cinema: string
  technology: string
  seat: string
  name: string
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
        <Text style={styles.textName}>{name}</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Title1 style={styles.title}>Date</Title1>
          <Text style={styles.text}>{date}</Text>
        </View>
        <View>
          <Title1 style={styles.title}>Time</Title1>
          <Text style={styles.text}>{time}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Title1 style={styles.title}>Cinema</Title1>
          <Text style={styles.text}>{cinema}</Text>
        </View>
        <View>
          <Title1 style={styles.title}>Seat</Title1>
          <Text style={styles.text}>{seat}</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          <Title1 style={styles.title}>Technology</Title1>
          <Text style={styles.text}>{technology}</Text>
        </View>
        <View>
          <Title1 style={styles.title}>Order</Title1>
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
    color: palette.theme.dark,
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
    color: palette.theme.dark,
    fontWeight: '700',
    fontSize: 16,
    marginTop: 8
  },
  title: {
    color: 'rgba(0, 0, 0, .3)'
  }
})