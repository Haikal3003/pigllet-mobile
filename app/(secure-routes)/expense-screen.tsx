import { useState } from 'react';
import { View, ScrollView, StatusBar } from 'react-native';

import ExpenseDaily from '@/components/expense-screen/expense-daily';
import ExpenseMonthly from '@/components/expense-screen/expense-monthly';
import ExpenseYearly from '@/components/expense-screen/expense-yearly';
import HeaderTabButton from '@/components/header-tab-button';

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

	return (
		<ScrollView className="flex-1 w-full bg-white px-6 pt-16 pb-10">
			<View className="flex-row justify-between border border-red-100 p-1 rounded-xl mb-8 bg-slate-100">
				<HeaderTabButton
					label="daily"
					text="Daily"
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				/>
				<HeaderTabButton
					label="monthly"
					text="Monthly"
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				/>
				<HeaderTabButton
					label="yearly"
					text="Yearly"
					selectedTab={selectedTab}
					setSelectedTab={setSelectedTab}
				/>
			</View>

			{renderContent()}
		</ScrollView>
	);
}
