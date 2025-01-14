import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { Link, useRouter } from 'expo-router';

import FormField from '@/components/form/form-field';
import Button from '@/components/form/button';

const LoginScreen = () => {
	const router = useRouter();
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 80 }}
			className="pt-14 px-10"
		>
			<View className="items-end justify-end mb-20">
				<Link href={'/(root)/(tabs)/home-screen'} className="w-36 text-right">
					<Text>Skip this process</Text>
				</Link>
			</View>

			<Text className="font-bold text-center mb-8 text-2xl text-slate-900">
				Login
			</Text>

			<FormField
				label="Email"
				placeholder="Enter your email..."
				keyboardType="email-address"
			/>

			<FormField label="Password" placeholder="Enter your password..." />

			<Button
				type="main"
				text="Login"
				onPress={() => router.push('/register-screen')}
			/>
			<Button
				type="secondary"
				text="Create an account"
				onPress={() => router.push('/register-screen')}
			/>
		</ScrollView>
	);
};

export default LoginScreen;
