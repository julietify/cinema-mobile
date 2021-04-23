import React, { memo, ReactNode } from "react"
import { StyleSheet, useWindowDimensions, View } from "react-native"
import { useTheme } from "@react-navigation/native"

import { Title } from "../ui/typography/title"

export const Heading = memo<{ value: string, children?: ReactNode }>(({
  value,
  children
}) => {

  const { colors } = useTheme()
  const { width } = useWindowDimensions()

  return (
    <View style={{ ...styles.container, width }}>
      <Title color={colors.text}>{value}</Title>
      {children}
    </View>
  )
})

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20
    }
})
