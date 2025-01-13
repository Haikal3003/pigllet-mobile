import { View, Text, TouchableOpacity } from 'react-native';

import BarChart from '../barcharts';
import CalendarIcon from '@/assets/svg/calendar.svg';
import SummaryExpense from './summary-expense';
import ExpenseByCategory from './expense-by-category';

interface ExpenseProps {
	selectedTab: string;
}

const ExpenseDaily = ({ selectedTab }: ExpenseProps) => {
	return (
		<View className="flex-1">
			<View className="mb-8 flex-row justify-between px-6">
				<View className="w-[70%]">
					<Text className="text-slate-600 text-base">Showing expense for</Text>
					<Text className="text-2xl text-[#FF2C4A]" style={{ fontWeight: 800 }}>
						November 12, 2024
					</Text>
				</View>

				<TouchableOpacity className="py-2 px-6 w-10 h-10 border border-red-100 rounded-xl flex-row justify-center items-center place-content-end">
					<CalendarIcon />
				</TouchableOpacity>
			</View>

			<BarChart selectedTab={selectedTab} />

			<SummaryExpense />

			<ExpenseByCategory />
		</View>
	);
};

export default ExpenseDaily;
