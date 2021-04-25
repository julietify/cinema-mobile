import React, { FC } from "react"
import { StyleSheet, View } from "react-native"

import { Heading } from '../../components/common/heading'

import { useAppDispatch } from "../../hooks/useRedux"
import { logout } from "../../redux/auth/thunks"

export const Profile: FC = () => {

  const dispatch = useAppDispatch()

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 40 }}>
        <Heading value='Profile' />
      </View>
      {/* <Button title='Exit' onPress={() => dispatch(logout())} /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})