import { ScrollView } from 'react-native';

import Greeting from '@/components/home-screen/greeting';
import Balance from '@/components/home-screen/balance';
import RecentActivities from '@/components/home-screen/recent-activities';
import WalletList from '@/components/home-screen/wallets';

export default function HomeScreen() {
	return (
		<ScrollView
			scrollEnabled={true}
			showsVerticalScrollIndicator={false}
			className="w-full h-full bg-red-100/10"
		>
			<Greeting />
			<Balance />
			<WalletList />
			<RecentActivities />
		</ScrollView>
	);
}
