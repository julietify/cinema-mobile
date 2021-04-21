import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import QRCode from 'react-native-qrcode-svg';

interface IClientInformation {
  client: String
  price: String
}

export const ClientInformation: FC<IClientInformation> = ({
client,
price
}) => { 
  return(
    <View style={styles.infoContainer}>
        <View style={{justifyContent:'space-between'}}>
          <View style={{marginBottom:20}}>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.text}>{client}</Text>
          </View>
          <View>
            <Text style={styles.title}>Price</Text>
            <Text style={styles.text}>{price}</Text>
          </View>
        </View>
        <View style={{justifyContent:'center'}}>
          <QRCode value="Hello" size={60}/>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    paddingHorizontal:40,
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  text: {
    color: '#1E1851',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 5,
  },
  title: {
    fontSize: 13,
    fontWeight: '700',
    color: 'rgba(0, 0, 0, .3)',
  }
})