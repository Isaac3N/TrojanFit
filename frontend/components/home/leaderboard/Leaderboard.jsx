import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

import styles from "./leaderboard.style";

import LeaderboardCard from "../../common/cards/leaderboard/LeaderboardCard";

const Leaderboard = () => {
	// const router = useRouter();

	leaderboard = [
		{
			_id: "1",
			name: "Dr Soon Juk Lee",
			score: "10000",
		},
		{
			_id: "2",
			name: "Darren Perry",
			score: "9800",
		},
		{
			_id: "3",
			name: "Isaac Ndubuisi",
			score: "8900",
		},
		{
			_id: "4",
			name: "Temidayo Akinyemi",
			score: "8000",
		},
		{
			_id: "5",
			name: "Mariah Simmons",
			score: "100",
		},
	];

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Leaderboard</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show all</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.cardsContainer}>
				<FlatList
					data={leaderboard}
					renderItem={({ item }) => <LeaderboardCard item={item} />}
					keyExtractor={(item) => item?._id}
				/>
			</View>
		</View>
	);
};

export default Leaderboard;
