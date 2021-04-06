import React, { FC } from "react"
import { Text, View, ScrollView } from "react-native"
import { CardFilm } from "../components/common/card.film"
import { TestComponent } from "../components/common/text.component"
export const Home: FC = () => {  
  return (
    <ScrollView>
      <TestComponent/>
        <CardFilm/>
    </ScrollView>
  )
}