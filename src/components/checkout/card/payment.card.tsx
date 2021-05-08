import React, { FC } from 'react'
import { View, Image, StyleSheet } from 'react-native'

import { RadioButton } from '../../ui/buttons/radio.button'
import { Title } from '../../ui/typography/title'

interface IPaymentCard {
  color?: string
  checked: any
  setChecked: any
  name: string
  image: string
}

export const PaymentCard: FC<IPaymentCard> = ({
  color,
  checked,
  setChecked,
  image,
  name
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          style={styles.image}
          source={{ uri: image }}
        />
        <Title 
          color='black'
          fontSize='16'
        >{name}
        </Title>
      </View>
      <View>
        <RadioButton
          color={color}
          status={checked === name ? 'checked' : 'unchecked'}
          onPress={() => setChecked(name)}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin:15
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center' 
  },
  image: {
    width: 60, 
    height: 30,
    marginRight: 20,
    alignItems: "center",
    justifyContent: 'center' 
  }
})