import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

export const CardFilm = () => {
	const styles = StyleSheet.create({
		container: {
			display: "flex",
			justifyContent: "space-around",
			alignItems: "center",
			height: "100%",
			paddingTop: 50,
			paddingBottom: 70,
		},
		containerRating: {
			display: "flex",
			flexDirection: "row",
			justifyContent: "space-between",
			width: 290,
		},
		rating: {
			display: 'flex',
			alignItems: 'center',
		},

		color: {
			color: "#808080",
		},

		ratingFont: {
			fontSize: 18,
			color: "#808080",
			fontWeight: "700",
			marginBottom: 5
		},
		filmName: {
			textTransform: "uppercase",
			fontSize: 25,
			fontWeight: '700',
			marginTop: 10,
		},
		img: {
			width: 290,
			height: 440,
			borderRadius: 10
		}

	})
	return (
		<View style={styles.container}>
			<Image
				source={{ uri: 'https://karavan.ua/wp-content/uploads/2019/12/74682950_738377696672108_7910429065208903771_n.jpg' }}
				style={styles.img}
			/>
			<Text style={styles.filmName}>No time to die</Text>
			<Text style={styles.color}>Action / Mistery  -  2 hours</Text>
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
			</View>
		</View>
	)
}
