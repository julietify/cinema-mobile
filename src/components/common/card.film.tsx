import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native'

let windowWidth = Dimensions.get('window').width;

let windowHeight = Dimensions.get('window').height;

let widthSize = windowWidth * 0.70;

let heightSize = widthSize * 1.55;

let lenghtSize = windowHeight / 100 * 75 ;

const styles = StyleSheet.create({
	container: {
		justifyContent: "space-around",
		alignItems: "center",
    height:lenghtSize,
    
	},
	containerRating: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: widthSize,
	},
	rating: {
		alignItems: 'center',
	},

	color: {
		color: "#808080",
	},

	ratingFont: {
		fontSize: 18,
		color: "#808080",
		fontWeight: "700",
		marginBottom: 5,
	},
	filmName: {
		textTransform: "uppercase",
		fontSize: 25,
		fontWeight: '700',
    marginBottom: 5,
	},
	img: {
		width: widthSize,
		height: heightSize,
		borderRadius: 10
	}
})

export const CardFilm = () => {
	return (
		<View style={styles.container}>
			<Image
				resizeMode="cover"
				source={{ uri: 'https://karavan.ua/wp-content/uploads/2019/12/74682950_738377696672108_7910429065208903771_n.jpg' }}
				style={styles.img}
			/>
			<View style={{alignItems:'center',width:widthSize}}>
        <Text style={styles.filmName}>No time to die</Text>
			  <Text style={styles.color}>Action / Mistery  -  2 hours</Text>
      </View>
		</View>

	)
}
/*
			<View style={styles.containerRating}>
				<View style={styles.rating}>
					<Text style={styles.ratingFont}>87%</Text>
					<Text style={styles.color}>rotten tomatoes</Text>
				</View>
				<View style={styles.rating}>
					<Text style={styles.ratingFont}>7.0</Text>
					<Text style={styles.color}>IMDb</Text>
				</View>
				<View style={styles.rating}>
					<Text style={styles.ratingFont}>79%</Text>
					<Text style={styles.color}>Metocritic</Text>
				</View>
			</View>*/