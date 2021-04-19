import React, { memo } from 'react'
import { View, StyleSheet } from 'react-native'

import QRCode from 'react-native-qrcode-svg'

interface ITicketCode {
  code:String
}

export const TicketCode = memo<ITicketCode>(({
  code
}) => {
  return(
    <View style={styles.container}>
      <QRCode
        value={`${code}`}
        color='#29275E'
      />
    </View>
  )
})
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal:30,
    paddingVertical:30,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent:'center'
  }
})