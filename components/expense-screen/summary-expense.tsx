import { View, Text } from 'react-native';
import React from 'react';
import ArrowDropdownIcon from '@/assets/svg/arrow/arrow-drop-down.svg';
import ArrowDropupIcon from '@/assets/svg/arrow/arrow-drop-up.svg';

interface SummaryExpense {
	reviews?: string;
}

export default function SummaryExpense({ reviews }: SummaryExpense) {
	const totalIncome = 125700;
	const totalExpense = 25542;

	function renderReviews(reviews: string) {
		if (reviews === 'monthly') return <MonthlyReview />;
		if (reviews === 'yearly') return <YearlyReview />;
		return null;
	}

	const label =
		reviews === 'monthly'
			? 'This month'
			: reviews === 'yearly'
			? 'This year'
			: 'Today';

	return (
		<View>
			<View className="flex-row justify-between items-center gap-2 pb-4 px-6">
				<View className="flex-1 flex-row bg-[#9DEE77] p-2 rounded-lg h-20">
					<ArrowDropupIcon />

					<View>
						<Text className="text-[#033F00] text-sm">{label} incomes</Text>

						<Text
							className={`text-[#033F00] ${
								totalIncome >= 1000000000 ? 'text-base' : 'text-xl'
							}`}
						>
							Rp {totalIncome.toLocaleString('id-ID')}
						</Text>
					</View>
				</View>

				<View className="flex-1 flex-row bg-[#FFC5CE] p-2 rounded-lg h-20">
					<ArrowDropdownIcon />

					<View>
						<Text className="text-[#9C041E] text-sm">{label} expenses</Text>

						<Text
							className={`text-[#9C041E] ${
								totalExpense > 1000000000 ? 'text-base' : 'text-xl'
							}`}
						>
							Rp {totalExpense.toLocaleString('id-ID')}
						</Text>
					</View>
				</View>
			</View>

			{renderReviews(reviews as string)}
		</View>
	);
}

function MonthlyReview() {
	return (
		<View className="pt-4 px-6">
			<View className="flex-row justify-between w-full">
				<Text>Your avg. spending (weekly)</Text>
				<Text>Rp 100.000</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Your avg. spending (daily)</Text>
				<Text>Rp 50.000</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Highest spending</Text>
				<Text>Rp 50.000</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Lowest spending</Text>
				<Text>Rp 50.000</Text>
			</View>
		</View>
	);
}

function YearlyReview() {
	return (
		<View className="pt-4 px-6">
			<View className="flex-row justify-between w-full">
				<Text>Your avg. spending (monthly)</Text>
				<Text>Rp 100.000</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Your avg. spending (monthly)</Text>
				<Text>Rp 50.000</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Highest spending</Text>
				<Text>Rp 50.000</Text>
			</View>

			<View className="flex-row justify-between">
				<Text>Lowest spending</Text>
				<Text>Rp 50.000</Text>
			</View>
		</View>
	);
}
