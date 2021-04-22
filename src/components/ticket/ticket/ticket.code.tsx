import React, { memo } from 'react'
import { useTheme } from '@react-navigation/native'
import Barcode from "react-native-barcode-builder"

export const TicketCode = memo<{ code: string }>(({
  code
}) => {

  const { colors } = useTheme()

  return (
    <Barcode 
      background={colors.card} 
      value={code} 
      format='CODE128'
      height={50} 
      width={2} 
      lineColor={colors.text}
    />
  )
})
