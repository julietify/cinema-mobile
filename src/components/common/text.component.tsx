import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent:'space-around',
        flexDirection:'row',
        height:70,
    }
})

export const TestComponent =  () => {
    return (
        <View style={styles.container}>
        </View>
    )
}
