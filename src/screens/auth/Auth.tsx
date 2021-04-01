import React, { FC } from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'

import { ButtonIcon } from '../../components/ui/buttons/button.icon'

import { useAppDispatch } from '../../hooks/useRedux'
import { signInGoolge } from '../../redux/auth/thunks'
import { palette } from '../../theme/palette'

export const Auth: FC = () => {

  const dispatch = useAppDispatch()
  const { colors } = useTheme()
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text 
          style={{ 
            fontSize: 36,
            margin: 30,
            color: colors.text
          }}
        >
          Welcome
        </Text>
      </View>
      <View style={{ flex: .8, alignItems: 'center', justifyContent: 'space-around' }}>
        <ButtonIcon 
          onPress={() => dispatch(signInGoolge())} 
          iconName='google'
          text='Continue with Google' 
          bgColor={palette.main.lightblue}
        />
        <ButtonIcon 
          onPress={() => {}} 
          iconName='facebook'
          text='Continue with Facebook' 
          bgColor={palette.main.darkblue}
        />
      </View>
      <View style={{ flex: 1, justifyContent: 'flex-end' }}>
        <Button 
          title='Go as guest' 
          onPress={() => navigation.navigate('root')} 
          color={colors.background} 
        />
      </View>
    </View>
  )
}