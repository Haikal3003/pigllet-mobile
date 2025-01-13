import { View, Text } from 'react-native';
import React from 'react';
import ArrowDropdownIcon from '@/assets/svg/arrow/arrow-drop-down.svg';
import ArrowDropupIcon from '@/assets/svg/arrow/arrow-drop-up.svg';

const SummaryExpense = () => {
	const totalIncome = 125700;
	const totalExpense = 25542;

	return (
		<View className="flex-row justify-between items-center gap-2 py-8 px-6">
			<View className="flex-1 flex-row bg-[#9DEE77] p-2 rounded-lg h-20">
				<ArrowDropupIcon />

				<View>
					<Text className="text-[#033F00]">Today incomes</Text>

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
					<Text className="text-[#9C041E]">Today expenses</Text>

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
	);
};

export default SummaryExpense;
