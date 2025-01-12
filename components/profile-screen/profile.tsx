import { View, Text } from 'react-native';
import React from 'react';
import ProfileIcon from '@/assets/svg/settings/profile.svg';
import CloudAlertIcon from '@/assets/svg/settings/cloud-alert.svg';

const Profile = () => {
	return (
		<View className="relative  bg-white p-4 rounded-2xl border border-slate-200 flex-row justify-between">
			<View className="flex-row">
				<View className="w-16 h-16 bg-slate-100 rounded-full items-center justify-center">
					<ProfileIcon />
				</View>
				<View className="pl-4">
					<Text className="text-lg">John Doe</Text>
					<Text className="text-sm text-slate-400">johndoe@gmail.com</Text>
				</View>
			</View>

			<View>
				<CloudAlertIcon />
			</View>
		</View>
	);
};

export default Profile;
