import { useState } from 'react';
import { ScrollView, View } from 'react-native';

import MonthPicker from '@/components/subscriptions-screen/subscriptionsTabScreen/month-picker';
import AnalyticsTabScreen from '@/components/subscriptions-screen/analyticsTabScreen';
import SubscriptionTabScreen from '@/components/subscriptions-screen/subscriptionsTabScreen';
import TopTabNavigation from '@/components/top-tab-navigation';

export default function SubscriptionScreen() {
	const [selectedTab, setSelectedTab] = useState<'subscriptions' | 'analytics'>(
		'subscriptions'
	);

	const tabs = [
		{
			label: 'subscriptions',
			text: 'Subscriptions',
			selectedTab: selectedTab,
			setSelectedTab: setSelectedTab,
		},
		{
			label: 'analytics',
			text: 'Analytics',
			selectedTab: selectedTab,
			setSelectedTab: setSelectedTab,
		},
	];

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 80 }}
			className="flex-1 w-full bg-white px-6 pt-16"
		>
			<TopTabNavigation tabs={tabs as any} />

			<PageToRender identifier={selectedTab} />
		</ScrollView>
	);
}

interface PageToRender {
	identifier: 'subscriptions' | 'analytics';
}

function PageToRender({ identifier }: PageToRender) {
	const date = new Date();
	const currentYear = date.getFullYear();
	const currentMonth = date.getMonth();

	const [selectedMonth, setSelectedMonth] = useState(currentMonth);
	const [selectedYear, _] = useState(currentYear);

	return (
		<View>
			<MonthPicker
				selectedMonth={selectedMonth}
				selectedYear={selectedYear}
				setSelectedMonth={setSelectedMonth}
			/>

			{identifier === 'subscriptions' ? (
				<SubscriptionTabScreen
					selectedMonth={selectedMonth}
					selectedYear={selectedYear}
					setSelectedMonth={setSelectedMonth}
				/>
			) : (
				<AnalyticsTabScreen />
			)}
		</View>
	);
}
