import { View, Text, ScrollView } from 'react-native';
import Profile from '@/components/profile-screen/profile';
import NotLoggedInAllert from '@/components/profile-screen/not-loggedin-alert';
import UserSettings from '@/components/profile-screen/user-setting';
import EmailIcon from '@/assets/svg/settings/email.svg';
import LockIcon from '@/assets/svg/settings/lock.svg';
import FingerPrintIcon from '@/assets/svg/settings/finger-print.svg';
import DeleteForeverIcon from '@/assets/svg/settings/delete-forever.svg';

export default function ProfileScreen() {
	return (
		<ScrollView
			className="w-full h-full pt-16 px-6 bg-slate-100"
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 80 }}
		>
			<Text className="text-center text-2xl font-bold tracking-tight">
				Settings
			</Text>
			<View className="relative w-full pt-8 gap-5">
				<Profile />

				<NotLoggedInAllert />

				<UserSettings
					title="Account"
					options={[
						{
							icon: <EmailIcon />,
							label: 'Wallets',
							status: '',
							onPress: () => {},
						},
					]}
				/>

				<UserSettings
					title="Security"
					options={[
						{
							icon: <LockIcon />,
							label: 'PIN',
							status: 'On',
							onPress: () => {},
						},
						{
							icon: <FingerPrintIcon />,
							label: 'Fingerprint',
							status: 'Off',
							onPress: () => {},
						},
					]}
				/>

				<UserSettings
					title="Delete Account"
					options={[
						{
							icon: <DeleteForeverIcon />,
							label: 'Delete Account',
							status: '',
							onPress: () => {},
						},
					]}
				/>
			</View>
		</ScrollView>
	);
}
