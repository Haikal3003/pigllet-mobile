import { View, Text } from 'react-native';

export default function SummarySubscription() {
	return (
		<View className="px-6 pt-4">
			<View className="flex-row justify-between w-full">
				<Text>Your avg. payment (monthly)</Text>
				<Text>Rp 100.000</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Highest payment</Text>
				<Text>Rp 50.000</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Lowest payment</Text>
				<Text>Rp 50.000</Text>
			</View>
		</View>
	);
}
