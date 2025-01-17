import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import SummarySubscription from './summary-subscription';
import SubscriptionsList from '../subscriptions-list';
import LineCharts from '@/components/linecharts';
import {
	chartDataTransformer,
	chartDataTransformerSubs,
} from '@/utils/chart-data-transformer';
import {
	subscriptionContext,
	SubscriptionContextType,
} from '@/context/SubscriptionProvider';

const AnalyticsTabScreen = () => {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());

	const { getSubscriptionByMonth } = useContext(
		subscriptionContext
	) as SubscriptionContextType;
	return (
		<View>
			<LineCharts
				data={chartDataTransformerSubs(getSubscriptionByMonth(currentDate))}
				currentDate={currentDate}
			/>
			<SummarySubscription />

			<SubscriptionsList />
		</View>
	);
};

export default AnalyticsTabScreen;
