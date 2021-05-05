import React, { FC, useMemo, useState } from "react"
import { View, Text, StyleSheet, FlatList } from 'react-native'

import { ButtonIcon } from "../../components/ui/buttons/button.icon"
import { Heading } from '../../components/common/heading'

import type { BookingRouteProp } from '../../navigation/stacks/film.stack'
import { palette } from "../../theme/palette"
import { Body1, Title1 } from "../../components/ui/typography/title"
import { BookingInfo } from "./cards/booking.info"
import { useTheme } from "@react-navigation/native"
import { TouchableOpacity } from "react-native-gesture-handler"

interface IBookingProps {
  route: BookingRouteProp
}

export const Booking: FC<IBookingProps> = ({
  route
}) => {

  const { filmId } = route.params
  
  const [seats, setSeats] = useState(seatsmock)
  const [activeDate, setActiveDate] = useState<string>(datemock[0].date)
  const [date, setDate] = useState(datemock)
  
  const { colors } = useTheme()
  
  const selectSeat = (id: number) => {
    //@ts-ignore
    const seatsflated = seats.flat()
    const isBusy = seatsflated.some(i => i.id === id && i.isBusy)
    
    if(isBusy) return

    setSeats(prev => prev.map(rows => rows.map(v => v.id === id ? { ...v, isSelected: !v.isSelected } : v )))
  }

  const sss = useMemo(() => {
    return date.filter((v: any) => v.date === activeDate)[0].time
  }, [activeDate])

  console.log(sss)

  return (
    <>
    <View style={{ marginTop: 40 }}>
      <Heading value='Booking' />
    </View>
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 15, height: 50, width: '100%', marginVertical: 5 }}>
        <FlatList
          data={datemock}
          renderItem={({ item }) => <TouchableOpacity onPress={() => setActiveDate(item.date)}>
            <View style={{ margin: 10 }}>
              <Text style={{ color: item.date === activeDate ? 'black': 'silver', 
              fontWeight: item.date === activeDate ? 'bold' : 'normal' }}>{item.date}</Text></View>
            </TouchableOpacity>}
          keyExtractor={(_, index) => index.toString()}
          horizontal
        />
      </View>
      <View  style={{ paddingHorizontal: 15,  width: '100%', marginVertical: 5 }}>
      <FlatList
          data={sss}
          renderItem={({ item }) => 
            <TouchableOpacity onPress={() => {}}>
              <View style={{ marginRight: 40, alignItems: 'center' }}>
                <Body1 margin='10px 0' color='silver'>{item}</Body1>
                <Title1>Cinetech +</Title1>
              </View>
            </TouchableOpacity>
          }
          keyExtractor={(_, index) => index.toString()}
          horizontal
        />
      </View>
      <View style={{ alignItems: 'center' }}>
        {/* <BookingInfo /> */}
      </View>
      <View style={{ flex: .8, width: '100%', justifyContent: 'center' }}>
        {
          seats.map((v, i) => {
            return (
              <View key={i} style={{ flexDirection: 'row' }}>
                <Text style={{ margin: 10 }}>{i + 1}</Text>
                <View style={{ flexDirection: 'row' }}>
                  {v.map(i => 
                    i 
                    ?
                    <TouchableOpacity onPress={() => selectSeat(i.id)} activeOpacity={i.isBusy && 1}> 
                    <View 
                        style={{
                          ...styles.seat, 
                          backgroundColor: 
                            i.isBusy ? '#cfd8dc' :
                            i.isSelected ? palette.main.lightblue :
                            '#eee'
                        }}>

                        </View>
                      </TouchableOpacity>
                    : <View style={{ width: 14, height: 14, margin: 5 }} />
                  )}
                </View>
              </View>
            )
          }) 
        }
      </View>
      <View style={styles.buttonContainer}>
        <ButtonIcon
          text='Checkout'
          iconName='chevron-right'
          onPress={() => {}}
          brRadius={15}
          p={13}
        />
        </View>
    </View>
  </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center'
  },
  buttonContainer: {
    bottom: 0, 
    position: 'absolute', 
    width: '100%',
    alignItems: 'center'
  },
  seat: {
    width: 14, 
    height: 14, 
    margin: 5,
    borderRadius: 5
  }
})

const datemock = [
  {
    date: 'Mon 19',
    time: ['13:00']
  },
  {
    date: 'Mon 18',
    time: ['13:00', '14:00']
  }
]

const seatsmock = [
  [
    {
      id: 1,
      n: 1,
      isSelected: false,
      isBusy: false
    },
    {
      id: 2,
      n: 2,
      isSelected: false,
      isBusy: false
    },
    {
      id: 3,
      n: 3,
      isSelected: false,
      isBusy: false
    },
    {
      id: 4,
      n: 4,
      isSelected: false,
      isBusy: false
    },
    {
      id: 5,
      n: 5,
      isSelected: true,
      isBusy: false
    },
    {
      id: 6,
      n: 6,
      isSelected: false,
      isBusy: true
    },
    {
      id: 102,
      n: 7,
      isSelected: false,
      isBusy: false
    },
    {
      id: 103,
      n: 8,
      isSelected: false,
      isBusy: false
    }
  ],
  [
    {
      id: 7,
      n: 1,
      isSelected: false,
      isBusy: false
    },
    {
      id: 8,
      n: 2,
      isSelected: false,
      isBusy: false
    },
    {
      id: 9,
      n: 3,
      isSelected: false,
      isBusy: false
    },
    {
      id: 10,
      n: 4,
      isSelected: true,
      isBusy: false
    },
    {
      id: 11,
      n: 5,
      isSelected: true,
      isBusy: false
    },
    {
      id: 12,
      n: 6,
      isSelected: false,
      isBusy: true
    },
    {
      id: 106,
      n: 7,
      isSelected: false,
      isBusy: false
    },
    {
      id: 109,
      n: 8,
      isSelected: false,
      isBusy: false
    }
  ],
  [
    {
      id: 13,
      n: 1,
      isSelected: false,
      isBusy: false
    },
    {
      id: 14,
      n: 2,
      isSelected: false,
      isBusy: false
    },
    {
      id: 15,
      n: 3,
      isSelected: false,
      isBusy: false
    },
    {
      id: 16,
      n: 4,
      isSelected: true,
      isBusy: false
    },
    {
      id: 17,
      n: 5,
      isSelected: true,
      isBusy: false
    },
    {
      id: 18,
      n: 6,
      isSelected: false,
      isBusy: true
    },
    {
      id: 122,
      n: 7,
      isSelected: false,
      isBusy: false
    },
    {
      id: 123,
      n: 8,
      isSelected: false,
      isBusy: false
    }
  ],
  [
    {
      id: 19,
      n: 1,
      isSelected: false,
      isBusy: false
    },
    {
      id: 20,
      n: 2,
      isSelected: false,
      isBusy: false
    },
    {
      id: 21,
      n: 3,
      isSelected: false,
      isBusy: false
    },
    {
      id: 22,
      n: 4,
      isSelected: false,
      isBusy: false
    },
    {
      id: 23,
      n: 5,
      isSelected: true,
      isBusy: false
    },
    {
      id: 24,
      n: 6,
      isSelected: false,
      isBusy: true
    },
    {
      id: 112,
      n: 7,
      isSelected: false,
      isBusy: false
    },
    {
      id: 113,
      n: 8,
      isSelected: false,
      isBusy: false
    }
  ],
  [
    {
      id: 25,
      n: 1,
      isSelected: false,
      isBusy: false
    },
    {
      id: 26,
      n: 2,
      isSelected: false,
      isBusy: false
    },
    {
      id: 27,
      n: 3,
      isSelected: false,
      isBusy: false
    },
    {
      id: 28,
      n: 4,
      isSelected: false,
      isBusy: false
    },
    {
      id: 29,
      n: 5,
      isSelected: false,
      isBusy: false
    },
    {
      id: 30,
      n: 6,
      isSelected: false,
      isBusy: true
    },
    {
      id: 152,
      n: 7,
      isSelected: false,
      isBusy: false
    },
    {
      id: 153,
      n: 8,
      isSelected: false,
      isBusy: false
    }
  ],
  [
    {
      id: 31,
      n: 1,
      isSelected: false,
      isBusy: false
    },
    {
      id: 32,
      n: 2,
      isSelected: false,
      isBusy: false
    },
    {
      id: 33,
      n: 3,
      isSelected: false,
      isBusy: false
    },
    {
      id: 34,
      n: 4,
      isSelected: false,
      isBusy: false
    },
    {
      id: 35,
      n: 5,
      isSelected: false,
      isBusy: false
    },
    {
      id: 36,
      n: 6,
      isSelected: false,
      isBusy: true
    },
    {
      id: 172,
      n: 7,
      isSelected: false,
      isBusy: false
    },
    {
      id: 173,
      n: 8,
      isSelected: false,
      isBusy: false
    }
  ],
  [
    {
      id: 37,
      n: 1,
      isSelected: false,
      isBusy: false
    },
    {
      id: 38,
      n: 2,
      isSelected: false,
      isBusy: false
    },
    {
      id: 39,
      n: 3,
      isSelected: false,
      isBusy: false
    },
    {
      id: 40,
      n: 4,
      isSelected: false,
      isBusy: false
    },
    {
      id: 41,
      n: 5,
      isSelected: false,
      isBusy: false
    },
    {
      id: 42,
      n: 6,
      isSelected: false,
      isBusy: true
    },
    {
      id: 144,
      n: 7,
      isSelected: false,
      isBusy: false
    },
    {
      id: 143,
      n: 8,
      isSelected: false,
      isBusy: false
    }
  ]
]