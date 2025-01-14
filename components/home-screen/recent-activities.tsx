import { Text, TouchableOpacity, View } from 'react-native';
import ArrowRightIcon from '@/assets/svg/arrow/keyboard-arrow-right.svg';
import ActivityCard from './activity-card';

export default function RecentActivities() {
	return (
		<View
			id="activities"
			className="flex-1 w-full pb-8 bg-white"
			style={{ paddingTop: 16 }}
		>
			<View className="flex-row justify-between items-center px-6">
				<Text
					className="text-slate-900 font-bold text-lg tracking-tight"
					style={{ fontWeight: 800 }}
				>
					Recent Activity
				</Text>

				<TouchableOpacity className="flex-row items-center">
					<Text className="text-slate-600 text-lg tracking-tight">Details</Text>
					<ArrowRightIcon />
				</TouchableOpacity>
			</View>

			<View id="activity" className="flex-col" style={{ marginTop: 8 }}>
				<ActivityCard type="expense" />
				<ActivityCard type="expense" />
				<ActivityCard type="expense" />
				<ActivityCard type="expense" />
				<ActivityCard type="expense" />
				<ActivityCard type="expense" />
				<ActivityCard type="expense" />
				<ActivityCard type="expense" />
			</View>
		</View>
	);
}
