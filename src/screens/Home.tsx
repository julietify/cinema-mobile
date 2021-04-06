import React, { FC } from "react"
import { Text, View, ScrollView } from "react-native"
import { CardFilm } from "../components/common/card.film"
import { TestComponent } from "../components/common/text.component"
export const Home: FC = () => {  

  const picture  = 'https://karavan.ua/wp-content/uploads/2019/12/74682950_738377696672108_7910429065208903771_n.jpg'
  const name  = 'No time to die'
  const genre  = 'Action / Mistery  -  2 hours'

  return (
    <ScrollView>
      <TestComponent/>
        <CardFilm picture={picture} name={name} genre={genre}/>
    </ScrollView>
  )
}