import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode-svg'

import { Title1 } from '../../ui/typography/title'
import { typography } from '../styles/ticket.styles'

interface IClientInformation {
  client: string
  price: string
}

export const ClientInformation = memo<IClientInformation>(({
  client,
  price
}) => { 

  return ( 
    <View style={styles.wrapper}>
      <View>
        <View style={styles.textContainer}>
          <Title1 style={typography.title}>Name</Title1>
          <Text style={typography.text}>{client}</Text>
        </View>
        <View style={styles.textContainer}>
          <Title1 style={typography.title}>Price</Title1>
          <Text style={typography.text}>{price}</Text>
        </View>
      </View>
      <View style={styles.codeContainer}>
        <QRCode value="Hello" size={50}/>
      </View>
    </View>
  )
})

const styles = StyleSheet.create({
  wrapper: {
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  codeContainer: {
    justifyContent: 'center'
  },
  textContainer: {
    margin: 10
  }
})