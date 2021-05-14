import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from 'react-native-elements';
import Map from '../components/Map';

const TrackCreateScreen = () => {
	return (
		<View>
			<Text h3>Create Track</Text>
			<Map />
		</View>
	)
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
