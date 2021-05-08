import React, { FC, useState } from 'react'
import { ScrollView, View, StyleSheet } from 'react-native'

import type { CheckoutRouteProp } from '../../navigation/stacks/film.stack'

import { Heading } from '../../components/common/heading'
import { Card } from '../../components/common/card'
import { OrderCard } from '../../components/checkout/card/order.card'
import { PaymentCard } from '../../components/checkout/card/payment.card'
import { ButtonIcon } from '../../components/ui/buttons/button.icon'
import { Body1, Title } from '../../components/ui/typography/title'

import { payment } from '../../utils/payment'

interface ICheckoutProps {
  route: CheckoutRouteProp
}

export const Checkout: FC<ICheckoutProps> = ({
  route
}) => {

  const { filmId } = route.params

  const [checked, setChecked] = useState('')

  const arrow = [
    { name: '27', title: 'Date' },
    { name: '14:00', title: 'Time' },
    { name: '16+', title: 'Age' },
  ]
  const order = [
    { range: '7', place: '4', price: 200 }
  ]

  return (

    <View style={styles.wrapper}>
      <ScrollView>
        <View style={{ marginTop: 40 }}>
          <Heading value='Checkout' />
        </View>
        <View style={{ paddingHorizontal: 30 }}>
          <Card
            prop={true}
            iPadding={25}
            iFont={16}
            iWidth={100}
            iFullness={'65%'}
            lines={[
              'Star Wars: Episode IX - The Rise of Skywalker',
              'Action, Adventure, Fantasy',
              'Multiplex'
            ]}
            id={''}
            poster={'https://resizing.flixster.com/nyQEEUdokTK91hsyvk18xi7tGTE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2RhMGM0OTk2LTRiZDktNDg1ZC05NzQ5LTUzMzQwZjA1OWFlMy53ZWJw'}
          />
          <View style={styles.container}>
            {arrow.map(i =>
              <View style={styles.infoContainer}>
                <Title color='black' fontSize='16'>{i.name}</Title>
                <Body1 color='silver' margin='0'>{i.title}</Body1>
              </View>)
            }
          </View>
          <View>
            <Title
              fontSize={18}
              color='black'
              style={styles.title}
            >Payment Method
            </Title>
            {payment.map((i, index) => <PaymentCard
              key={index}
              color={'black'}
              name={i.name}
              image={i.image}
              checked={checked}
              setChecked={setChecked}
            />
            )}
          </View>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <ButtonIcon
          text='Pay'
          iconName='chevron-right'
          onPress={() => { }}
          brRadius={15}
          p={13}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center'
  },
  container: {
    flexDirection: 'row',
    margin: 10
  },
  infoContainer: {
    marginRight:50
  },
  buttonContainer: {
    bottom: 0,
    width: '100%',
    alignItems: 'center'
  },
  title: {
    marginVertical:20
  }
})



// {order.map(i =>
//   <OrderCard
//     range={i.range}
//     place={i.place}
//     price={i.price}>
//   </OrderCard>)
// }