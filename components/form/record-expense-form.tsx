import { Dispatch, SetStateAction, useState } from 'react';
import {
	ScrollView,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';

import CustomDatePicker from '../custom-date-picker';
import InputField from './input-field';

import ArrowRightIcon from '@/assets/svg/arrow/keyboard-arrow-right.svg';
import ArrowDownIcon from '@/assets/svg/arrow/keyboard-arrow-down.svg';
import Button from './Button';

export default function RecordExpenseForm() {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [selectedType, setSelectedType] = useState<'income' | 'spending'>(
		'income'
	);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [selectedWallet, setSelectedWallet] = useState<string>('Cash');

	return (
		<View className="pt-8 gap-6">
			<View className="px-6">
				<InputField label="Description" />
			</View>

			<View className="flex-row gap-4 px-6">
				<View className="gap-2 w-1/3 relative">
					<Text className="text-slate-900 tracking-tight">Type</Text>

					<TouchableOpacity
						className="flex-row items-center justify-center w-auto p-2 px-4 border border-red-100 rounded-lg"
						onPress={() => setIsModalVisible(!isModalVisible)}
					>
						<Text className="text-slate-900 text-lg tracking-tight capitalize">
							{selectedType}
						</Text>

						{isModalVisible ? <ArrowDownIcon /> : <ArrowRightIcon />}
					</TouchableOpacity>

					{isModalVisible && (
						<View className="absolute bg-white border border-red-100 rounded-xl top-20 left-0 w-[175px] p-2 z-40 flex-row flex-wrap justify-between gap-1 shadow-xl">
							<TouchableOpacity
								className={`w-full p-2 rounded-lg ${
									selectedType === 'income'
										? 'bg-[#FF4863] border-[#FF6A83] '
										: 'bg-white'
								}`}
								onPress={() => {
									setSelectedType('income');
									setIsModalVisible(false);
								}}
							>
								<Text
									className={`text-left text-lg	 ${
										selectedType === 'income' ? 'text-white' : 'text-slate-600'
									}`}
								>
									Income
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								className={`w-full p-2 rounded-lg ${
									selectedType === 'spending'
										? 'bg-[#FF4863] border-[#FF6A83] '
										: 'bg-white'
								}`}
								onPress={() => {
									setSelectedType('spending');
									setIsModalVisible(false);
								}}
							>
								<Text
									className={`text-left text-lg	 ${
										selectedType === 'spending'
											? 'text-white'
											: 'text-slate-600'
									}`}
								>
									Spending
								</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>

				<View className="gap-2 flex-1">
					<Text className="text-slate-900 tracking-tight">Paid at</Text>
					<CustomDatePicker
						displayDate
						displayDay
						currentDate={currentDate}
						setDate={setCurrentDate}
					/>
				</View>
			</View>

			<WalletSelector
				selectedWallet={selectedWallet}
				setSelectedWallet={setSelectedWallet}
			/>

			<View className="px-6">
				<Button onPress={() => ''} text="Record expense" type="main" />
			</View>
		</View>
	);
}

interface WalletSelector {
	selectedWallet: string;
	setSelectedWallet: Dispatch<SetStateAction<string>>;
}

function WalletSelector(props: WalletSelector) {
	const wallets = ['Cash', 'GoPay', 'DANA', 'Shopee Pay'];

	return (
		<View className="gap-2">
			<Text className="text-slate-900 tracking-tight ml-6">Paid with</Text>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View className="flex-row gap-2 px-6">
					{wallets.map((wallet) => (
						<TouchableHighlight
							key={wallet}
							onPress={() => props.setSelectedWallet(wallet)}
							className="rounded-xl"
						>
							<View className="bg-slate-900 rounded-xl p-3 justify-between overflow-hidden h-20 w-36 relative">
								<Text className="text-white text-sm">{wallet}</Text>

								<Text className="text-white"></Text>

								{props.selectedWallet === wallet && (
									<Text className="absolute bg-green-600 text-white px-2 top-2 right-2 rounded-xl text-xs">
										Selected
									</Text>
								)}
							</View>
						</TouchableHighlight>
					))}
				</View>
			</ScrollView>
		</View>
	);
}
