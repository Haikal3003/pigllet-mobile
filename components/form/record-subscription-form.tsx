import { View, Text, TouchableOpacity } from 'react-native';
import InputField from './input-field';
import { useState } from 'react';
import CustomDatePicker from '../custom-date-picker';
import Button from './Button';

import ArrowRightIcon from '@/assets/svg/arrow/keyboard-arrow-right.svg';
import ArrowDownIcon from '@/assets/svg/arrow/keyboard-arrow-down.svg';

export default function RecordSubscriptionForm() {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [selectedStatus, setSelectedStatus] = useState<'paid' | 'not paid'>(
		'paid'
	);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	return (
		<View className="pt-8 gap-6">
			<View className="px-6">
				<InputField label="Description" />
			</View>

			<View className="flex-row gap-4 px-6">
				<View className="gap-2 w-1/3 relative">
					<Text className="text-slate-900 tracking-tight">Status</Text>
					<TouchableOpacity
						className="flex-row items-center justify-center w-auto p-2 px-4 border border-red-100 rounded-lg"
						onPress={() => setIsModalVisible(!isModalVisible)}
					>
						<Text className="text-slate-900 text-lg tracking-tight capitalize">
							{selectedStatus}
						</Text>

						{isModalVisible ? <ArrowDownIcon /> : <ArrowRightIcon />}
					</TouchableOpacity>

					{isModalVisible && (
						<View className="absolute bg-white border border-red-100 rounded-xl top-20 left-0 w-[175px] p-2 z-40 flex-row flex-wrap justify-between gap-1 shadow-xl">
							<TouchableOpacity
								className={`w-full p-2 rounded-lg ${
									selectedStatus === 'paid'
										? 'bg-[#FF4863] border-[#FF6A83] '
										: 'bg-white'
								}`}
								onPress={() => {
									setSelectedStatus('paid');
									setIsModalVisible(false);
								}}
							>
								<Text
									className={`text-left text-lg ${
										selectedStatus === 'paid' ? 'text-white' : 'text-slate-600'
									}`}
								>
									Paid
								</Text>
							</TouchableOpacity>
							<TouchableOpacity
								className={`w-full p-2 rounded-lg ${
									selectedStatus === 'not paid'
										? 'bg-[#FF4863] border-[#FF6A83] '
										: 'bg-white'
								}`}
								onPress={() => {
									setSelectedStatus('not paid');
									setIsModalVisible(false);
								}}
							>
								<Text
									className={`text-left text-lg ${
										selectedStatus === 'not paid'
											? 'text-white'
											: 'text-slate-600'
									}`}
								>
									Not Paid
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

			<View className="px-6">
				<InputField label="Amount" keyboardType="numeric" />
			</View>

			<View className="px-6">
				<Button onPress={() => ''} text="Record subscription" type="main" />
			</View>
		</View>
	);
}
