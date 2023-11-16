import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import styles from "./leaderboard.style";

const LeaderboardCard = ({ item }) => {
	return (
		<TouchableOpacity style={styles.container}>
			<TouchableOpacity style={styles.logoContainer}>
				<Text style={styles.name} numberOfLines={1}>
					{item._id}
				</Text>
			</TouchableOpacity>

			<View style={styles.textContainer}>
				<Text style={styles.name} numberOfLines={1}>
					{item.name}
				</Text>
				<Text style={styles.score}>{item.score}</Text>
			</View>
		</TouchableOpacity>
	);
};

export default LeaderboardCard;
