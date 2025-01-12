import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import BarChart from '../barcharts';
import ArrowDownIcon from '@/assets/svg/arrow/keyboard-arrow-down.svg';

interface ExpenseProps {
	selectedTab: string;
}

const ExpenseYearly = ({ selectedTab }: ExpenseProps) => {
	return (
		<View>
			<View>
				<View className="flex-row justify-between items-center gap-2">
					<View>
						<Text className="text-slate-400 text-base">Your analytics for</Text>
						<Text className="text-2xl">2024</Text>
					</View>
					<View className="mt-2">
						<TouchableOpacity className="py-2 px-6 border border-slate-200 rounded-xl flex-row justify-center items-center place-content-end">
							<Text className="text-slate-400 text-sm">2024</Text>
							<ArrowDownIcon />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};

export default ExpenseYearly;
