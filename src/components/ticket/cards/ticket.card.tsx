import React, { memo } from 'react'
import { Text, View, StyleSheet, useWindowDimensions, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { Title1 } from '../../ui/typography/title'

interface ITicketCard {
  name: string
  cinema: string
  ticketId: string
  tickets: number
  onPress?: (ticketId: string) => void
}

export const TicketCard = memo<ITicketCard>(({
  name,
  cinema,
  tickets,
  ticketId,
  onPress
}) => {

  const { width } = useWindowDimensions()

  return (
    <TouchableOpacity activeOpacity={.6} onPress={() => onPress(ticketId)}>
      <View 
        style={{
          ...styles.container, 
          width: width - 50
        }}
      >
      <Image 
          source={{ uri: 'https://i.pinimg.com/originals/c0/64/b6/c064b6e47c04174393b2ad5078e4f004.png' }}
          style={{
            width: 65,
            height: 90,
            resizeMode: 'stretch',
            borderRadius: 30
          }}
        />
        <View style={styles.infoContainer}>
          <Title1>{name}</Title1>
          <Text 
            style={{ 
              ...styles.text, 
              color: 'gray', 
              fontWeight: 'bold' 
            }}
          >
            {tickets} Tickets
          </Text>
          <Text 
            style={{ 
              ...styles.text, 
              color: 'silver' 
            }}
          >
            {cinema}
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Icon name='chevron-right' size={25} />
        </View>
      </View>
      
    </TouchableOpacity>
  )
})

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoContainer: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    width: '50%'
  },
  priceContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '25%'
  },
  text: {
    marginTop: 10,
    fontSize: 12
  }
})