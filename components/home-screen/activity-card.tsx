import { Text, View } from 'react-native';
import { transactionTypes } from '@/constants/transactions';

interface ActivityCard {
	type: transactionTypes;
}

export default function ActivityCard({}: ActivityCard) {
	return (
		<View className="flex-row justify-between w-full pt-3 pb-3 px-6">
			<View className="flex-col justify-start gap-1">
				<Text className="text-lg text-slate-900 tracking-tight">
					Some Payment
				</Text>
				<Text className="text-slate-600 tracking-tight">Tues, 12 Nov 2024</Text>

				<Text className="text-slate-600 tracking-tight">Paid with DANA</Text>
			</View>

			<View className="items-end gap-1">
				<Text className="text-lg tracking-tight">- Rp 250.000</Text>
				<Text className=" text-sm text-slate-600 tracking-tight">Transfer</Text>

				<Text className="text-xs text-white bg-red-400 p-1 px-2 rounded-full tracking-tight">
					Transportation
				</Text>
			</View>
		</View>
	);
}
