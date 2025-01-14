import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import AddIcon from '@/assets/svg/add.svg';

export default function WalletList() {
	return (
		<View className="flex-col gap-2 pb-6">
			<Text className="text-slate-600" style={{ marginLeft: 24 }}>
				My wallets
			</Text>

			<ScrollView
				contentContainerStyle={{ paddingLeft: 24, paddingRight: 24 }}
				horizontal
				showsHorizontalScrollIndicator={false}
			>
				<View className="flex-row gap-2 items-center">
					<Wallet />
					<Wallet />
					<TouchableOpacity className="bg-red-300/30 w-16 h-16 rounded-full flex-row items-center justify-center border border-dashed border-red-300">
						<AddIcon />
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
}

function Wallet() {
	return (
		<View className="bg-slate-900 rounded-xl p-3 justify-end overflow-hidden h-20 w-36">
			<Text className="text-white">08159889****</Text>
		</View>
	);
}
