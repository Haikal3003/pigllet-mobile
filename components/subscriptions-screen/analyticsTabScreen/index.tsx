import { View, Text } from 'react-native';
import React, { useContext, useState } from 'react';
import SummarySubscription from './summary-subscription';
import SubscriptionsList from '../subscriptions-list';
import LineCharts from '@/components/linecharts';
import { chartDataTransformerSubs } from '@/utils/chart-data-transformer';
import {
	SubscriptionContext,
	SubscriptionContextTypes,
} from '@/context/SubscriptionProvider';

const AnalyticsTabScreen = () => {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());

	const { getSubscriptionsByMonth } = useContext(
		SubscriptionContext
	) as SubscriptionContextTypes;
	return (
		<View>
			<LineCharts
				data={chartDataTransformerSubs(getSubscriptionsByMonth(currentDate))}
				currentDate={currentDate}
			/>
			<SummarySubscription />

			<SubscriptionsList selectedDate={currentDate} />
		</View>
	);
};

export default AnalyticsTabScreen;
