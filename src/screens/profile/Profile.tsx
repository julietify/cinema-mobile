import React, { FC } from "react"
import { StyleSheet, View, Text } from "react-native"

import { useTheme } from "@react-navigation/native"

import { Heading } from '../../components/common/heading'
import { UserAvatar } from '../../components/common/user.avatar'
import { ButtonProfile } from "../../components/profile/button.menu"
import { Title } from "../../components/ui/typography/title"

import { useAppDispatch } from "../../hooks/useRedux"
import { useAppSelector } from '../../hooks/useRedux'

import { getUser } from '../../redux/auth/selectors'
import { logout } from "../../redux/auth/thunks"

import { menu } from '../../utils/menu'

export const Profile: FC = () => {

  const dispatch = useAppDispatch()

  const { name, picture } = useAppSelector(getUser)

  const { colors } = useTheme()

  return (
    <View style={styles.wrapper}>
      <View style={{ marginTop: 40 }}>
        <Heading value='Profile' />
      </View>
      <View style={styles.container}>
        <View style={styles.clientContainer}>
          <UserAvatar size={60} picture={picture} />
          <View style={styles.clientInfo}>
            <Title color={colors.text} fontSize={17}>{name} Korol</Title>
          </View>
        </View>
        {menu.map(i =>
          <ButtonProfile
            key={i.text}
            iconName={i.icon}
            text={i.text}
            onPress={i.onPress}
          />
        )}
      </View>
      <Title
        style={styles.button}
        color={colors.text}
        fontSize={16}
        onPress={() => dispatch(logout())}
      >logout</Title>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    margin: 30,
    flex: 1
  },
  headingContainer: {
    marginTop: 40
  },
  clientContainer: {
    flexDirection: 'row',
    marginBottom: 30
  },
  clientInfo: {
    justifyContent: 'center',
    marginLeft: 20
  },
  button: {
    textAlign: 'center',
    marginVertical: 5
  }
})