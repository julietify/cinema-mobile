import React, { memo, ReactNode} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'

interface IFilterItemProps {
	onPress?: () => void
	isSelected?: boolean
	children: ReactNode
}

export const FilterItem = memo<IFilterItemProps>(({
	onPress,
	isSelected,
	children
}) => {
	const { colors } = useTheme()
	
	return (
		<TouchableOpacity onPress={onPress}>
			<View 
				style={{
					...styles.container,
					backgroundColor: colors.card,
					elevation: isSelected ? 5 : 0	
				}}
			>
				<Text 
					style={{
						...styles.text, 
						color: isSelected ? colors.text : 'silver' 
					}}
				>
					{children}
				</Text>
			</View>
		</TouchableOpacity>
	)
})

const styles = StyleSheet.create({
	container: {
		margin: 10,
		borderRadius: 20,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		fontSize: 12,
		marginHorizontal: 10
	}
})


