import LineCharts from '@/components/linecharts';
import { ChartData } from '@/types/type';
import { useState } from 'react';

export default function SubscriptionChart() {
	const [currentDate, setCurrentDate] = useState(new Date());

	const data: ChartData = {
		labels: [
			'1',
			'2',
			'3',
			'4',
			'5',
			'6',
			'7',
			'8',
			'9',
			'10',
			'11',
			'12',
			'13',
			'14',
			'15',
			'16',
		],
		datasets: [
			{
				data: [
					125000, 100000, 250000, 50000, 125000, 100000, 250000, 50000, 125000,
					100000, 250000, 50000, 125000, 100000, 250000, 50000,
				],
			},
		],
	};

	return <LineCharts data={data} currentDate={currentDate} />;
}
