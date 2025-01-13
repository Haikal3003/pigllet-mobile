import { useState } from 'react';
import { View, ScrollView } from 'react-native';

import ExpenseDaily from '@/components/expense-screen/expense-daily';
import ExpenseMonthly from '@/components/expense-screen/expense-monthly';
import ExpenseYearly from '@/components/expense-screen/expense-yearly';
import TopTabNavigation from '@/components/top-tab-navigation';

export default function ExpenseScreen() {
	const [selectedTab, setSelectedTab] = useState<string>('daily');

	const renderContent = () => {
		if (selectedTab === 'daily') {
			return <ExpenseDaily selectedTab={selectedTab} />;
		}

		if (selectedTab === 'monthly') {
			return <ExpenseMonthly selectedTab={selectedTab} />;
		}

		if (selectedTab === 'yearly') {
			return <ExpenseYearly selectedTab={selectedTab} />;
		}
	};

	const tabs = [
		{
			label: 'daily',
			text: 'Daily',
			selectedTab: selectedTab,
			setSelectedTab: setSelectedTab,
		},
		{
			label: 'monthly',
			text: 'Monthly',
			selectedTab: selectedTab,
			setSelectedTab: setSelectedTab,
		},
		{
			label: 'yearly',
			text: 'Yearly',
			selectedTab: selectedTab,
			setSelectedTab: setSelectedTab,
		},
	];

	return (
		<ScrollView className="flex-1 h-full bg-white">
			<View className="pt-16 px-6">
				<TopTabNavigation tabs={tabs as any} />
			</View>

			{renderContent()}
		</ScrollView>
	);
}
