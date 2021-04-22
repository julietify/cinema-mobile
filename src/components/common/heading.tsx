import React, { memo } from "react"
import { useWindowDimensions, View } from "react-native"
import { useTheme } from "@react-navigation/native"

import { Title } from "../ui/typography/title"

export const Heading = memo<{ value: string }>(({
  value
}) => {

  const { colors } = useTheme()
  const { width } = useWindowDimensions()

  return (
    <View style={{ width }}>
      <Title color={colors.text} style={{ padding: 20 }}>{value}</Title>
    </View>
  )
})