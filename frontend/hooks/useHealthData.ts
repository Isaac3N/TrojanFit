import { useState, useEffect } from "react";
import AppleHealthKit, {
	HealthValue,
	HealthKitPermissions,
} from "react-native-health";

const useHealthData = () => {
	const [heartRateSamples, setHeartRateSamples] = useState([]);
	const [error, setError] = useState(null);

	const permissions = {
		permissions: {
			read: [AppleHealthKit.Constants.Permissions.HeartRate],
			write: [AppleHealthKit.Constants.Permissions.Steps],
		},
	} as HealthKitPermissions;

	useEffect(() => {
		AppleHealthKit.initHealthKit(permissions, (initError: string) => {
			if (initError) {
				setError("[ERROR] Cannot grant permissions!");
			} else {
				const options = {
					startDate: new Date(2020, 1, 1).toISOString(),
				};

				AppleHealthKit.getHeartRateSamples(
					options,
					(callbackError: string, results: HealthValue[]) => {
						if (callbackError) {
							setError(callbackError);
						} else {
							setHeartRateSamples(results);
						}
					}
				);
			}
		});
	}, []);

	return { heartRateSamples, error };
};

export default useHealthData;
