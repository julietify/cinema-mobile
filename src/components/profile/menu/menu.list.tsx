import React, { FC } from "react"
import { View } from "react-native"

import { ButtonProfile } from "../button.menu"
import { menu } from "../../../utils/menu"

export const MenuList: FC = () => {
  return (
    <View>
    {
      menu.map(i => 
        <ButtonProfile
          key={i.text}
          iconName={i.icon}
          text={i.text}
        />
      )
    }
    </View>
  )
}
