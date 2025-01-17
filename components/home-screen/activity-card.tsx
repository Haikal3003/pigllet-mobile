import { Text, View } from 'react-native';
import { transactionTypes } from '@/constants/transactions';

interface ActivityCard {
	transactionType: transactionTypes;
	description: string;
	date: string;
	wallet: string;
	total: number;
	category?: string;
}

export default function ActivityCard({
	transactionType,
	date,
	description,
	total,
	wallet,
	category,
}: ActivityCard) {
	const formatedDate = new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});
	const prefixForTotal =
		transactionType === 'subscriptions'
			? ''
			: transactionType === 'income'
			? '+'
			: '-';
	const prefixForPaidWith =
		transactionType === 'subscriptions'
			? ''
			: transactionType === 'income'
			? 'Added to'
			: 'Paid with';

	return (
		<View className="flex-row justify-between w-full pt-3 pb-3 px-6">
			<View className="flex-col justify-start gap-1">
				<Text className="text-lg text-slate-900 tracking-tight">
					{description}
				</Text>
				<Text className="text-slate-600 tracking-tight">{formatedDate}</Text>

				<Text className="text-slate-600 tracking-tight">
					{prefixForPaidWith} {wallet}
				</Text>
			</View>

			<View className="items-end gap-1">
				<Text className="text-lg tracking-tight">
					{prefixForTotal} Rp {total.toLocaleString('id-ID')}
				</Text>

				<Text className=" text-sm text-slate-600 tracking-tight capitalize">
					{transactionType}
				</Text>

				{category && (
					<Text className="text-xs text-white bg-red-400 p-1 px-2 rounded-full tracking-tight">
						{category}
					</Text>
				)}
			</View>
		</View>
	);
}
