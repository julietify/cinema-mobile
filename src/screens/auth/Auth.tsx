import React, { FC } from 'react'
import { StyleSheet, View } from 'react-native'

import { ButtonIcon } from '../../components/ui/buttons/button.icon'

import { useAppDispatch } from '../../hooks/useRedux'
import { signInGoolge } from '../../redux/auth/thunks'
import { palette } from '../../theme/palette'
import { Heading } from '../../components/common/heading'

export const Auth: FC = () => {

  const dispatch = useAppDispatch()
  
  return (
    <> 
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Heading value='Welcome' />
      </View>
      <View style={styles.btnContainer}>
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
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headingContainer: {
    justifyContent: 'center',
    flex: .6
  },
  btnContainer: {
    flex: .4,
    alignItems: 'center',
    justifyContent: 'center'
  }
})