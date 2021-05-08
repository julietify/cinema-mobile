import React, { FC } from 'react'
import { View, StyleSheet } from 'react-native'

import { Body1, Title } from '../../ui/typography/title'

interface IOrderCard {
  range: string
  place: string
  price: number
}
export const OrderCard: FC<IOrderCard> = ({
  range,
  place,
  price
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.infoContainer}>
        <View style={styles.orderContainer}>
          <Title color='black' fontSize='15'>{range}</Title>
          <Body1 color='silver' margin='0'>Range</Body1>
        </View>
        <View style={styles.orderContainer}>
          <Title color='black' fontSize='15'>{place}</Title>
          <Body1 color='silver' margin='0'>Place</Body1>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.priceContainer}>
          <Title color='black' fontSize='15'>{price}</Title>
          <Body1 color='silver' margin='0'>  UAH</Body1>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical: 15,
  },
  orderContainer: {
    alignItems: 'center',
    marginRight: 30
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  infoContainer: {
    flexDirection: 'row',
  },
})