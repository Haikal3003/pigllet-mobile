import { Dispatch, SetStateAction, useContext, useState } from 'react';
import {
	ScrollView,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	View,
} from 'react-native';

import Button from './Button';
import CustomDatePicker from '../custom-date-picker';
import InputField from './input-field';

import ArrowRightIcon from '@/assets/svg/arrow/keyboard-arrow-right.svg';
import ArrowDownIcon from '@/assets/svg/arrow/keyboard-arrow-down.svg';

import {
	ExpenseContext,
	ExpenseContextTypes,
} from '@/context/ExpensesProvider';

export default function RecordExpenseForm() {
	const [currentDate, setCurrentDate] = useState<Date>(new Date());
	const [selectedType, setSelectedType] = useState<string>('spending');
	const [selectedCategory, setSelectedCategory] = useState<string>('Food');
	const [selectedWallet, setSelectedWallet] = useState<{
		wallet_id: number;
		wallet_name: string;
	}>({ wallet_id: 1, wallet_name: 'Cash' });
	const [description, setDecription] = useState<string>('');
	const [total, setTotal] = useState<string>('0');

	const { loading, saveExpenses } = useContext(
		ExpenseContext
	) as ExpenseContextTypes;

	return (
		<View className="pt-8 gap-6">
			<View className="px-6">
				<InputField
					label="Description"
					onChange={(event) => setDecription(event.nativeEvent.text)}
					placeholder="Mie goreng"
				/>
			</View>

			<View className="flex-row gap-4 px-6">
				<View
					className={`gap-2 relative ${
						selectedType === 'spending' ? 'w-1/2' : 'w-full'
					}`}
				>
					<Text className="text-slate-900 tracking-tight">Type</Text>

					<Select
						selectItems={['income', 'spending']}
						selected={selectedType}
						setSelected={setSelectedType}
					/>
				</View>

				{selectedType !== 'income' && (
					<View className="gap-2 relative flex-1">
						<Text className="text-slate-900 tracking-tight">Category</Text>

						<Select
							selectItems={['Necessity', 'Food', 'Healthcare']}
							selected={selectedCategory}
							setSelected={setSelectedCategory}
						/>
					</View>
				)}
			</View>

			<View className="gap-2 flex-row flex-1 px-6">
				<View className="gap-2 w-1/2 relative">
					<Text className="text-slate-900 tracking-tight">Date</Text>

					<CustomDatePicker
						displayDate
						displayDay
						currentDate={currentDate}
						setDate={setCurrentDate}
						maximumDate={new Date()}
					/>
				</View>

				<View className="gap-2 relative flex-1">
					<InputField
						label="Total"
						onChange={(event) => setTotal(event.nativeEvent.text)}
						keyboardType="number-pad"
						placeholder="Rp"
					/>
				</View>
			</View>

			<WalletSelector
				selectedWallet={selectedWallet}
				setSelectedWallet={setSelectedWallet}
			/>

			<View className="px-6">
				<Button
					onPress={() =>
						saveExpenses({
							description: description,
							id: Date.now(),
							paid_at: currentDate.toISOString(),
							transaction_type: selectedType as any,
							category:
								selectedType === 'income' ? undefined : selectedCategory,
							wallet: selectedWallet,
							total: Number(total),
						})
					}
					text={loading ? 'Adding your record...' : 'Record your expense'}
					type="main"
					disabled={loading}
				/>
			</View>
		</View>
	);
}

interface WalletSelector {
	selectedWallet: { wallet_id: number; wallet_name: string };
	setSelectedWallet: Dispatch<
		SetStateAction<{ wallet_id: number; wallet_name: string }>
	>;
}

function WalletSelector(props: WalletSelector) {
	const wallets: { wallet_id: number; wallet_name: string }[] = [
		{ wallet_id: 1, wallet_name: 'Cash' },
	];

	return (
		<View className="gap-2">
			<Text className="text-slate-900 tracking-tight ml-6">
				Select your wallet
			</Text>

			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				<View className="flex-row gap-2 px-6">
					{wallets.map((wallet) => (
						<TouchableHighlight
							key={wallet.wallet_id}
							onPress={() => props.setSelectedWallet(wallet)}
							className="rounded-xl"
						>
							<View className="bg-slate-900 rounded-xl p-3 justify-between overflow-hidden h-20 w-36 relative">
								<Text className="text-white text-sm">{wallet.wallet_name}</Text>

								<Text className="text-white"></Text>

								{props.selectedWallet.wallet_id === wallet.wallet_id && (
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

interface Select {
	selected: string;
	setSelected: Dispatch<SetStateAction<string>>;
	selectItems: string[];
}

function Select({ selected, setSelected, selectItems }: Select) {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	return (
		<View>
			<TouchableOpacity
				className="flex-row items-center justify-between w-auto p-2 px-4 border border-red-100 rounded-lg"
				onPress={() => setIsModalVisible(!isModalVisible)}
			>
				<Text className="text-slate-900 text-lg tracking-tight capitalize">
					{selected}
				</Text>

				{isModalVisible ? <ArrowDownIcon /> : <ArrowRightIcon />}
			</TouchableOpacity>

			{isModalVisible && (
				<View className="absolute bg-white border border-red-100 rounded-xl top-20 left-0 w-[175px] p-2 z-40 flex-row flex-wrap justify-between gap-1 shadow-xl">
					{selectItems.map((item) => (
						<TouchableOpacity
							key={item}
							className={`w-full p-2 rounded-lg ${
								selected === item
									? 'bg-[#FF4863] border-[#FF6A83] '
									: 'bg-white'
							}`}
							onPress={() => {
								setSelected(item);
								setIsModalVisible(false);
							}}
						>
							<Text
								className={`text-left text-lg capitalize ${
									selected === item ? 'text-white' : 'text-slate-600'
								}`}
							>
								{item}
							</Text>
						</TouchableOpacity>
					))}
				</View>
			)}
		</View>
	);
}
