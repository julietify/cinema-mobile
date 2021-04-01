import React, { FC } from "react"
import { Button, Text, View } from "react-native"

import { useAppDispatch } from "../../hooks/useRedux"
import { logout } from "../../redux/auth/thunks"

export const Profile: FC = () => {

  const dispatch = useAppDispatch()

  return (
    <View>
      <Text>
        Profile screen
      </Text>
      <Button title='Exit' onPress={() => dispatch(logout())} />
    </View>
  )
}