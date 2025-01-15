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
	const labelColor = props.is_paid ? 'bg-[#3AC100]' : 'bg-red-600';

	return (
		<View className="flex-row justify-between gap-6 items-start pt-3 pb-3">
			<View>
				<Text className="text-lg text-slate-900 tracking-tight">
					{props.title}
				</Text>
				<Text className="text-slate-600 tracking-tight">
					Due Tues, 12 Nov 2024
				</Text>
			</View>

			<View className="items-end">
				<Text
					className={`tracking-tight text-xs rounded-full px-3 p-[2px] text-white ${labelColor}`}
				>
					{labelText}
				</Text>

				<Text className="text-lg tracking-tight">
					Rp {props.total.toLocaleString('id-ID')}
				</Text>
			</View>
		</View>
	);
};

export default SubscriptionsCard;
