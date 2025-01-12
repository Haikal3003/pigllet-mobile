import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FilterIcon from '@/assets/svg/filter.svg';
import SubscriptionsCard from './subscriptions-card';

type Subscriptions = {
	id: number;
	title: string;
	due_date: string;
	is_paid: boolean;
	total: number;
}[];

const subscriptions: Subscriptions = [
	{
		id: 1,
		title: 'Netflix',
		due_date: new Date().toISOString(),
		is_paid: false,
		total: 57500,
	},
	{
		id: 2,
		title: 'HBO',
		due_date: new Date().toISOString(),
		is_paid: true,
		total: 55000,
	},
	{
		id: 3,
		title: 'New York Times',
		due_date: new Date().toISOString(),
		is_paid: false,
		total: 67000,
	},
	{
		id: 4,
		title: 'Blinklist',
		due_date: new Date().toISOString(),
		is_paid: true,
		total: 25000,
	},
];

const SubscriptionsList = () => {
	return (
		<View className="mt-8">
			<View className="flex-row justify-between items-center">
				<Text className="text-base" style={{ fontWeight: 800 }}>
					Subscriptions
				</Text>

				<TouchableOpacity className="flex-row items-center justify-center px-4 h-10 border border-red-100 rounded-lg">
					<FilterIcon />
				</TouchableOpacity>
			</View>

			<View className="mt-8" style={{ marginTop: 8 }}>
				{subscriptions.map((subs) => (
					<SubscriptionsCard key={subs.id} {...subs} />
				))}
			</View>
		</View>
	);
};

export default SubscriptionsList;
