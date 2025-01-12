import { Text, View } from 'react-native';

type Subscription = {
	id: number;
	title: string;
	due_date: string;
	is_paid: boolean;
	total: number;
};

const SubscriptionsCard = (props: Subscription) => {
	const labelText = props.is_paid ? 'Paid' : 'Not Paid';
	const labelColor = props.is_paid ? 'bg-[#3AC100]' : 'bg-[#F0334F]';

	return (
		<View className="flex-row justify-between gap-6 items-start pt-3 pb-3">
			<View>
				<Text className="text-base text-slate-900">{props.title}</Text>
				<Text className="text-sm text-slate-600">Due Tues, 12 Nov 2024</Text>
			</View>

			<View className="items-end">
				<Text
					className={` text-xs rounded-full px-3 p-[2px] text-white ${labelColor}`}
				>
					{labelText}
				</Text>

				<Text className="text-base">
					Rp {props.total.toLocaleString('id-ID')}
				</Text>
			</View>
		</View>
	);
};

export default SubscriptionsCard;
