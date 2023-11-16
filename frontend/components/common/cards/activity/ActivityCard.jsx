import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import useHealthData from "../../../../hooks/useHealthData";

import RingProgress from "../../../ring_progress/Ringprogress";

import styles from "./activitycard.style";

const ActivityCard = ({ item, handleCardPress }) => {
	// const { steps, distance, flights } = useHealthData;
	// console.log(`Steps: ${steps} | Distance: ${distance}m | Flights: ${flights}`);
	return (
		<TouchableOpacity
			style={styles.container(item)}
			onPress={() => handleCardPress(item)}
		>
			<TouchableOpacity style={styles.logoContainer(item)}>
				<RingProgress radius={30} strokeWidth={15} progress={item.progress} />
			</TouchableOpacity>

			<Text style={styles.activityValue} numberOfLines={1}>
				{item.value}
			</Text>
			<View style={styles.infoContainer}>
				<Text style={styles.activity(item)} numberOfLines={1}>
					{item.activity}
				</Text>
			</View>
		</TouchableOpacity>
	);
};

export default ActivityCard;
