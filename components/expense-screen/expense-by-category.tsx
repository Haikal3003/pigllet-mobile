import { Text, View } from 'react-native';

export default function ExpenseByCategory() {
	return (
		<View className="px-6 pt-4">
			<Text className="tracking-tight text-lg font-bold mb-2 text-slate-900">
				Spending by category
			</Text>

			<View>
				<ListItem title="Food" total={450000} />
				<ListItem title="Gifts" total={50000} />
				<ListItem title="Clothing" total={150000} />
				<ListItem title="Healthcare" total={200000} />
			</View>
		</View>
	);
}

interface ListItem {
	title: string;
	total: number;
}

function ListItem({ title, total }: ListItem) {
	return (
		<View className="flex-row justify-between items-center py-2 w-full">
			<View className="flex-row gap-2 items-center">
				<View className="w-3 h-3 rounded-full bg-slate-900"></View>
				<Text className="text-lg text-slate-900">{title}</Text>
			</View>

			<Text className="text-lg text-slate-900">
				Rp {total.toLocaleString('id-ID')}
			</Text>
		</View>
	);
}
