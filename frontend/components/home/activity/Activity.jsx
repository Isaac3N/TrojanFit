import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	FlatList,
	ActivityIndicator,
} from "react-native";

import { SIZES } from "../../../constants";
import styles from "./activity.style";
import ActivityCard from "../../common/cards/activity/ActivityCard";
import useHealthData from "../../../hooks/useHealthData";

const Activities = [
	{
		_id: "1",
		emoji: "\uD83C\uDFC3", // Running emoji
		activity: "Steps \uD83C\uDFC3",
		value: "You have 7000 steps",
		progress: 0.1,
	},
	{
		_id: "2",
		emoji: "\u26F0", // Mountain emoji
		activity: "Flights Climbed \u26F0",
		value: "You've Climbed 4 flights",
		progress: 0.7,
	},

	{
		_id: "3",
		emoji: "\uD83D\uDECF", // Bed emoji
		activity: "Sleep \uD83D\uDECF",
		value: "You had 7 hours of Sleep",
		progress: 0.8,
	},
];

const Activity = () => {
	const handleCardPress = (item) => {};

	const { steps, distance, flights } = useHealthData();
	console.log(`Steps: ${steps} | Distance: ${distance}m | Flights: ${flights}`);

	// console.log(data, "Hi");
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Activities</Text>
			</View>
			<View style={styles.cardsContainer}>
				<FlatList
					data={Activities}
					renderItem={({ item }) => (
						<ActivityCard item={item} handleCardPress={handleCardPress} />
					)}
					keyExtractor={(item) => item?._id}
					contentContainerStyle={{ columnGap: SIZES.medium }}
					horizontal
				/>
			</View>
		</View>
	);
};

export default Activity;
