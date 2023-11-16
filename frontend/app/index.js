import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";
import { Activity, Leaderboard, ScreenHeaderBtn, Welcome } from "../components";

const App = () => {
	const router = useRouter();

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
					),
					headerRight: () => (
						<ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
					),
					headerTitle: "",
				}}
			/>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={{ flex: 1, padding: SIZES.medium }}>
					<Welcome />
					<Activity />
					<Leaderboard />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
