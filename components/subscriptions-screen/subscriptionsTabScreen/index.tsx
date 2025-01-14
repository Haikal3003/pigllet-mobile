import { View } from 'react-native';
import { Dispatch, SetStateAction } from 'react';

import Calendar from './calendar';
import SubscriptionsList from './subscriptions-list';

interface SubscriptionsTabScreen {
	selectedYear: number;
	selectedMonth: number;
}

export default function SubscriptionTabScreen({
	selectedMonth,
	selectedYear,
}: SubscriptionsTabScreen) {
	return (
		<View>
			<Calendar selectedYear={selectedYear} selectedMonth={selectedMonth} />
			<SubscriptionsList />
		</View>
	);
}
