import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import SubscriptionsCard from './subscriptions-card';
import {
	SubscriptionContext,
	SubscriptionContextTypess,
} from '@/context/SubscriptionProvider';

interface SubscriptionsList {
	selectedDate: Date;
}

const SubscriptionsList = ({ selectedDate }: SubscriptionsList) => {
	const { getSubscriptionsByMonth } = useContext(
		SubscriptionContext
	) as SubscriptionContextTypess;

	return (
		<View className="mt-8 ">
			<View className="flex-row justify-between items-center px-6">
				<Text className="text-lg" style={{ fontWeight: 800 }}>
					Subscriptions
				</Text>
			</View>

			<View className="mt-8" style={{ marginTop: 8 }}>
				{getSubscriptionsByMonth(selectedDate).map((subs) => (
					<SubscriptionsCard key={subs.id} {...subs} />
				))}
			</View>
		</View>
	);
};

export default SubscriptionsList;
