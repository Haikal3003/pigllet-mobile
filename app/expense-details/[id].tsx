import { useContext } from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { View, Text, TouchableOpacity } from 'react-native';

import {
	ExpenseContext,
	ExpenseContextTypes,
} from '@/context/ExpensesProvider';

import CloseIcon from '@/assets/svg/close_24dp_E8EAED_FILL0_wght300_GRAD0_opsz24.svg';
import DeleteForeverIcon from '@/assets/svg/delete_forever_24dp_E8EAED_FILL0_wght300_GRAD0_opsz24.svg';

export default function DetailsScreen() {
	const { id } = useLocalSearchParams();
	const { getExpenseById } = useContext(ExpenseContext) as ExpenseContextTypes;

	const expense = getExpenseById(Number(id));

	const formatedDate = new Date(expense.paid_at).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<View className="pt-16 bg-[#FF2C4A] h-full">
			<View className="px-6 flex-row justify-between">
				<TouchableOpacity
					onPress={() => router.back()}
					className="w-12 h-12 items-center justify-center rounded-full border border-white"
				>
					<CloseIcon />
				</TouchableOpacity>

				<View className="gap-2 flex-row">
					<TouchableOpacity
						onPress={() => router.back()}
						className="w-12 h-12 items-center justify-center rounded-full border border-white"
					>
						<CloseIcon />
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => router.back()}
						className="w-12 h-12 items-center justify-center rounded-full border border-white"
					>
						<DeleteForeverIcon />
					</TouchableOpacity>
				</View>
			</View>

			<View className="m-6 bg-white rounded-2xl">
				<View className="gap-1 p-6 border-b border-dashed border-slate-300 relative">
					<Text className="text-sm text-slate-600 text-center">Item name</Text>
					<Text className="text-center text-xl text-slate-900 font-bold">
						{expense.description}
					</Text>

					<View className="absolute bg-[#FF2C4A] w-8 h-8 rounded-full -left-4 -bottom-4"></View>
					<View className="absolute bg-[#FF2C4A] w-8 h-8 rounded-full -right-4 -bottom-4"></View>
				</View>

				<View className="gap-8">
					{expense.category && (
						<View className="flex-row justify-between p-6 w-full border-b border-slate-100">
							<Text>Category</Text>
							<Text>{expense.category}</Text>
						</View>
					)}

					<View className="flex-row justify-between p-6 w-full border-b border-dashed border-slate-200">
						<Text>Total</Text>
						<Text>Rp {expense.total.toLocaleString('id-IDR')}</Text>
					</View>

					<View className="flex-row justify-between pb-6 px-6 w-full border-b border-dashed border-slate-200">
						<Text>Added to wallet</Text>
						<Text>{expense.wallet.wallet_name}</Text>
					</View>

					<View className="flex-row justify-between px-6 pb-6">
						<Text>Added at</Text>
						<Text>{formatedDate}</Text>
					</View>
				</View>
			</View>
		</View>
	);
}
