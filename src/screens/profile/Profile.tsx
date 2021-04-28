import React, { FC } from "react"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { useTheme } from "@react-navigation/native"

import { Heading } from '../../components/common/heading'
import { UserAvatar } from '../../components/common/user.avatar'
import { MenuList } from "../../components/profile/menu/menu.list"
import { Title, Title1 } from "../../components/ui/typography/title"

import { useAppDispatch } from "../../hooks/useRedux"
import { useAppSelector } from '../../hooks/useRedux'

import { getUser } from '../../redux/auth/selectors'
import { logout } from "../../redux/auth/thunks"

export const Profile: FC = () => {

  const dispatch = useAppDispatch()
  const { name, picture } = useAppSelector(getUser)
  
  const { colors } = useTheme()

  const _logout = () => dispatch(logout())
  
  return (
    <>
    <View style={styles.headingContainer}>
      <Heading value='Profile' />
    </View>
    <View style={styles.wrapper}>
      <View style={styles.clientContainer}>
        <UserAvatar size={60} picture={picture} />
        <View style={styles.clientInfo}>
          <Title color={colors.text} fontSize='17px'>{name}</Title>
        </View>
      </View>
      <MenuList />
      <TouchableOpacity onPress={_logout}>
        <Title1 style={styles.button}>
          Logout
        </Title1>
      </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 50,
    justifyContent: 'space-between'
  },
  headingContainer: {
    marginTop: 40
  },
  clientContainer: {
    flexDirection: 'row'
  },
  clientInfo: {
    justifyContent: 'center',
    marginLeft: 20
  },
  button: {
    textAlign: 'center'
  }
})