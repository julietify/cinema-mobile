import React, { FC, useState } from 'react'
import { View, useWindowDimensions, StyleSheet } from 'react-native'

import type { TicketRouteProp } from '../../navigation/stacks/ticket.stack'

import { tickets } from '../../utils/tickets'
import { Ticket } from '../../screens/ticket/Ticket'
import { ButtonBack } from '../ui/buttons/button.back'
import { Wrapper } from '../film/wrappers/film.wrapper'
import { FlatList } from 'react-native-gesture-handler'

interface ITicketContainerProps {
  route: TicketRouteProp
}
export const TicketContainer: FC<ITicketContainerProps> = ({
  route
}) => {

  const { ticketOrder } = route.params

  const { width } = useWindowDimensions()

  const iWidth = width * .8
  const iHeight = iWidth / 15
  const lineHeight = iWidth / 80

  const [ticket] = useState(() => tickets.filter(ticket => ticket.order === ticketOrder)[0])

  return (
    <View style={styles.wrapper}>
      <Wrapper uri={'https://resizing.flixster.com/nyQEEUdokTK91hsyvk18xi7tGTE=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzL2RhMGM0OTk2LTRiZDktNDg1ZC05NzQ5LTUzMzQwZjA1OWFlMy53ZWJw'}>
        <View style={styles.buttonsContainer}>
          <ButtonBack />
        </View>
        <View>
        <FlatList
          data={ticket.tickets}
          renderItem={({ item }) =>
            <Ticket
              key={item.sited}
              name={ticket.name}
              code={item.code}
              time={ticket.startTime}
              date={ticket.date}
              cinema={ticket.cinema}
              order={ticket.order}
              age={ticket.age}
              sited={item.sited}
              technology={ticket.technology}
              price={ticket.price}
              iWidth={iWidth}
              iHeight={iHeight}
              lineHeight={lineHeight}
            />
          }
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          decelerationRate={0.99}
          showsHorizontalScrollIndicator={false}
        />
        </View>
      </Wrapper>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  line: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 1,
    borderColor: 'white'
  },
  buttonsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    height: 120
  },
})