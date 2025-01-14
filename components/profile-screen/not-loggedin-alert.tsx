import { View, Text } from 'react-native';
import React from 'react';
import AccountCircleIcon from '@/assets/svg/settings/account-circle.svg';

const NotLoggedInAllert = () => {
	return (
		<View className="relative w-full bg-red-100 rounded-2xl border border-red-200 p-4">
			<View className="flex-row w-full items-start">
				<AccountCircleIcon />

				<View className="pl-2 w-[90%] relative">
					<Text className="text-lg text-red-900 tracking-tight">
						You are not logged in!
					</Text>

					<Text className="text-slate-600 tracking-tight">
						You need to login to use all the feature in this application.
					</Text>
				</View>
			</View>
		</View>
	);
};

export default NotLoggedInAllert;
