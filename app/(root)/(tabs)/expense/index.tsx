import { ScrollView } from 'react-native';

import ExpenseDaily from '@/components/expense-screen/expense-daily';

export default function ExpenseScreen() {
	return (
		<ScrollView
			className="flex-1 h-full bg-white"
			contentContainerStyle={{ paddingBottom: 100 }}
			showsVerticalScrollIndicator={false}
		>
			<ExpenseDaily />
		</ScrollView>
	);
}
