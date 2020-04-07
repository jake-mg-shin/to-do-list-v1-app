import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import propTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
	Thunderstorm: {
		iconName: 'weather-lightning',
		gradient: ['#859398', '#283048'],
	},
	Drizzle: {
		iconName: 'weather-windy-variant',
		gradient: ['#859398', '#283048'],
	},
	Rain: {
		iconName: 'weather-pouring',
		gradient: ['#859398', '#283048'],
	},
	Snow: {
		iconName: 'weather-snowy',
		gradient: ['#859398', '#283048'],
	},
	Mist: {
		iconName: 'cloud-off-outline',
		gradient: ['#859398', '#283048'],
	},
	Smoke: {
		iconName: 'smoke-detector',
		gradient: ['#859398', '#283048'],
	},
	Haze: {
		iconName: 'cloud-off-outline',
		gradient: ['#859398', '#283048'],
	},
	Dust: {
		iconName: 'cloud-off-outline',
		gradient: ['#859398', '#283048'],
	},
	Fog: {
		iconName: 'weather-fog',
		gradient: ['#859398', '#283048'],
	},
	Sand: {
		iconName: 'cloud-off-outline',
		gradient: ['#859398', '#283048'],
	},
	Dust: {
		iconName: 'cloud-off-outline',
		gradient: ['#859398', '#283048'],
	},
	Ash: {
		iconName: 'cloud-off-outline',
		gradient: ['#859398', '#283048'],
		title: 'title',
		subtitle: 'subtitle',
	},
	Squall: {
		iconName: 'weather-windy',
		gradient: ['#859398', '#283048'],
	},
	Tornado: {
		iconName: 'cloud-off-outline',
		gradient: ['#FC354C', '#0ABFBC'],
	},
	Clear: {
		iconName: 'weather-sunny',
		gradient: ['#ffc500', '#c21500'],
	},
	Clouds: {
		iconName: 'weather-cloudy',
		gradient: ['#A8CABA', '#5D4157'],
		title: 'title',
		subtitle: 'subtitle',
	},
};

export default function Weather({ temp, condition }) {
	return (
		<LinearGradient
			colors={weatherOptions[condition].gradient}
			style={styles.container}
		>
			<StatusBar barStyle="light-content" />
			<View style={styles.halfContainer}>
				<MaterialCommunityIcons
					size={96}
					name={weatherOptions[condition].iconName}
					color="white"
				/>
				<Text style={styles.temp}>{temp}º</Text>
			</View>
			<View style={{ ...styles.halfContainer, ...styles.textContainer }}>
				<Text style={styles.title}>
					{weatherOptions[condition].title}
				</Text>
				<Text style={styles.subtitle}>
					{weatherOptions[condition].subtitle}
				</Text>
			</View>
		</LinearGradient>
	);
}

Weather.propTypes = {
	temp: propTypes.number.isRequired,
	condition: propTypes.oneOf([
		'Thunderstorm',
		'Drizzle',
		'Rain',
		'Snow',
		'Mist',
		'Smoke',
		'Haze',
		'Dust',
		'Fog',
		'Sand',
		'Dust',
		'Ash',
		'Squall',
		'Tornado',
		'Clear',
		'Clouds',
	]).isRequired,
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	temp: {
		fontSize: 42,
		color: 'white',
	},
	halfContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		color: 'white',
		fontSize: 45,
		fontWeight: '300',
		marginBottom: 10,
		textAlign: 'left',
	},
	subtitle: {
		color: 'white',
		fontWeight: '600',
		fontSize: 27,
		textAlign: 'left',
	},
	textContainer: {
		paddingHorizontal: 40,
		alignItems: 'flex-start',
		justifyContent: 'center',
		flex: 1,
	},
});
