import React, { memo } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Barcode from "react-native-barcode-builder";
import { palette } from '../../../theme/palette'

interface ITicketCode {
  code: string
}

export const TicketCode = memo<ITicketCode>(({
  code
}) => {
  return(
    <View style={styles.container}>
      <Barcode value={`${code}`} format='CODE128' height={70} width={2.6} lineColor={`${'black'}`}/>
    </View>
  )
})
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical:15,
    backgroundColor: 'white',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
  }
})