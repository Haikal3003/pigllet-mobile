import { View, Text, ScrollView, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';

interface BarChartProps {
	selectedTab: string;
}

const dailyData = [
	{ value: 450000 },
	{ value: 300000 },
	{ value: 500000 },
	{ value: 250000 },
	{ value: 600000 },
	{ value: 400000 },
	{ value: 1200000 },
	{ value: 550000 },
	{ value: 350000 },
	{ value: 450000 },
	{ value: 300000 },
	{ value: 150000 },
	{ value: 160000 },
	{ value: 170000 },
	{ value: 180000 },
	{ value: 190000 },
	{ value: 200000 },
	{ value: 110000 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
	// { value: 0 },
];

const monthlyData = [
	{ month: 'Jan', value: 5000000 },
	{ month: 'Feb', value: 4000000 },
	{ month: 'Mar', value: 4500000 },
	{ month: 'Apr', value: 6000000 },
	{ month: 'May', value: 5500000 },
	{ month: 'Jun', value: 7000000 },
	{ month: 'Jul', value: 6500000 },
	{ month: 'Aug', value: 5000000 },
	{ month: 'Sep', value: 6000000 },
	{ month: 'Oct', value: 8000000 },
	{ month: 'Nov', value: 7500000 },
	{ month: 'Dec', value: 9000000 },
];

const BarChart = ({ selectedTab }: BarChartProps) => {
	const [data, setData] = useState(dailyData);
	const [activeBar, setActiveBar] = useState<number | null>(null);

	useEffect(() => {
		if (selectedTab === 'daily') {
			setData(dailyData);
		} else if (selectedTab === 'monthly') {
			setData(monthlyData);
		}
	}, [selectedTab]);

	const maxBarHeight = 150;

	const maxValue = Math.max(...data.map((item) => item.value));

	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			className="h-60"
		>
			<View className="flex-row items-end justify-between gap-2 -z-10">
				{data.map((item, i) => {
					const barHeight = (item.value / maxValue) * maxBarHeight;
					const isActiveBar = activeBar === i;
					return (
						<View key={i}>
							<Pressable onPress={() => setActiveBar(i)}>
								<View
									className="w-7 mb-2"
									style={{
										height: barHeight,
										borderTopLeftRadius: 8,
										borderTopRightRadius: 8,
										backgroundColor: isActiveBar ? '#FF4C66' : '#FFDDE2',
									}}
								/>
								<Text className="text-center text-sm text-slate-600">
									{i + 1}
								</Text>

								{activeBar === i && (
									<View
										className="w-28 p-2 bg-white border border-slate-100"
										style={{
											position: 'absolute',
											top: -35,
											zIndex: 100,
											left: i > 3 ? -85 : 10,
											borderTopLeftRadius: 8,
											borderTopRightRadius: 8,
											borderBottomLeftRadius: i > 3 ? 8 : 0,
											borderBottomRightRadius: i > 3 ? 0 : 8,
										}}
									>
										<Text className="text-xs z-10">
											{selectedTab === 'daily'
												? `Rp ${item.value.toLocaleString('id-ID')}`
												: `Rp ${item.value.toLocaleString('id-ID')}`}
										</Text>
									</View>
								)}
							</Pressable>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
};

export default BarChart;
