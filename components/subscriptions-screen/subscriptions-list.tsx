import { View, Text, TouchableOpacity } from 'react-native';
import React, { useContext } from 'react';
import FilterIcon from '@/assets/svg/filter.svg';
import SubscriptionsCard from './subscriptions-card';
import {
	subscriptionContext,
	SubscriptionContextType,
} from '@/context/SubscriptionProvider';

const SubscriptionsList = () => {
	const { subscriptions, deleteSubscriptionById, updateSubscription } =
		useContext(subscriptionContext) as SubscriptionContextType;

	return (
		<View className="mt-8 ">
			<View className="flex-row justify-between items-center px-6">
				<Text className="text-lg" style={{ fontWeight: 800 }}>
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
