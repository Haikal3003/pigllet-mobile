import { View, Text } from 'react-native';
import React from 'react';
import SubscriptionChart from './subscription-chart';
import SummarySubscription from './summary-subscription';
import SubscriptionsList from '../subscriptions-list';

const AnalyticsTabScreen = () => {
	return (
		<View>
			<SubscriptionChart />
			<SummarySubscription />

			<View className="px-6">
				<SubscriptionsList />
			</View>
		</View>
	);
};

export default AnalyticsTabScreen;
