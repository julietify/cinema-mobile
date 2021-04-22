import React, { FC } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import QRCode from 'react-native-qrcode-svg';
import { Title1 } from '../../ui/typography/title'
import { palette } from '../../../theme/palette'

interface IClientInformation {
  client: string
  price: string
}

export const ClientInformation: FC<IClientInformation> = ({
client,
price
}) => { 
  return(
    <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.margin}>
            <Title1 style={styles.title}>Name</Title1>
            <Text style={styles.text}>{client}</Text>
          </View>
          <View>
            <Title1 style={styles.title}>Price</Title1>
            <Text style={styles.text}>{price}</Text>
          </View>
        </View>
        <View style={styles.codeContainer}>
          <QRCode value="Hello" size={60}/>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal:40,
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  container: {
    justifyContent:'space-between'
  },
  codeContainer: {
    justifyContent:'center'
  },
  text: {
    fontWeight: '700',
    fontSize: 16,
    marginTop: 5,
  },
  title: {
    color:'rgba(0,0,0,0.3)'
  },
  margin:{
    marginBottom:20
  },
})