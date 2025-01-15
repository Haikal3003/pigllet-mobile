import {
	View,
	Text,
	SafeAreaView,
	ScrollView,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import FormField from '@/components/form/form-field';
import Button from '@/components/form/Button';

const LoginScreen = () => {
	const router = useRouter();
	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 80 }}
			className="pt-14 px-6"
		>
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
				onPress={() => router.push('/(auth)/register-screen')}
			/>
			<Button
				type="secondary"
				text="Create an account"
				onPress={() => router.push('/(auth)/register-screen')}
			/>
		</ScrollView>
	);
};

export default LoginScreen;
