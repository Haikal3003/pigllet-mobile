import {
	SubscriptionContext,
	SubscriptionContextTypes,
} from '@/context/SubscriptionProvider';
import { useContext } from 'react';
import { View, Text } from 'react-native';

export default function SummarySubscription() {
	const { subscriptions } = useContext(
		SubscriptionContext
	) as SubscriptionContextTypes;

	const totalPayments = subscriptions.reduce(
		(sum, subs) => sum + subs.total,
		0
	);

	const avgPaymentMonthly =
		subscriptions.length > 0 ? totalPayments / subscriptions.length : 0;

	const highestPayment =
		subscriptions.length > 0
			? Math.max(...subscriptions.map((subs) => subs.total))
			: 0;

	const lowestPayment =
		subscriptions.length > 0
			? Math.min(...subscriptions.map((subs) => subs.total))
			: 0;

	const formatNumber = (number: number) => {
		return new Intl.NumberFormat('id-ID').format(number);
	};

	return (
		<View className="px-6 pt-4">
			<View className="flex-row justify-between w-full">
				<Text>Your avg. payment (monthly)</Text>
				<Text>Rp {formatNumber(avgPaymentMonthly)}</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Highest payment</Text>
				<Text>Rp {formatNumber(highestPayment)}</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Lowest payment</Text>
				<Text>Rp {formatNumber(lowestPayment)}</Text>
			</View>
		</View>
	);
}
