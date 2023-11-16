import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	FlatList,
	Image,
} from "react-native";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Person = ["Student", "Teachers", "General Staff"];

const Welcome = () => {
	const router = useRouter();

	const [activePerson, setActivePerson] = useState("Student");
	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hey Trojan, </Text>
				<Text style={styles.welcomeMessage}>Time to Get Active!</Text>
			</View>

			<View style={styles.tabsContainer}>
				<FlatList
					data={Person}
					renderItem={({ item }) => (
						<TouchableOpacity
							style={styles.tab(activePerson, item)}
							onPress={() => {}}
						>
							<Text style={styles.tabText(activePerson, item)}>{item}</Text>
						</TouchableOpacity>
					)}
					keyExtractor={(item) => item}
					contentContainerStyle={{ columnGap: SIZES.small }}
					horizontal
				/>
			</View>
		</View>
	);
};

export default Welcome;
