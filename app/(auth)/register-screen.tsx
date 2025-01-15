import React, { useState } from 'react';
import { Text, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

import FormField from '@/components/form/form-field';
import Button from '@/components/form/Button';
import BirthdayGenderForm from '@/components/form/birthday-gender-form';

const RegisterScreen = () => {
	const router = useRouter();

	const [form, setForm] = useState({
		name: '',
		username: '',
		email: '',
		job: '',
		password: '',
	});

	const handleInputChange = (key: string, value: string) => {
		setForm((prev) => ({ ...prev, [key]: value }));
	};

	const validateForm = () => {
		return Object.values(form).every((value) => value.trim() !== '');
	};

	const handleRegister = async () => {
		if (!validateForm()) {
			Alert.alert('Error', 'Please fill in all the fields.');
			return;
		}

		try {
			const { data } = await axios.post(
				`${process.env.EXPO_PUBLIC_API_URL}/users`,
				form
			);

			const userRegister = {
				id: data.data.id,
				email: data.data.email,
			};

			await axios.post(
				`${process.env.EXPO_PUBLIC_API_URL}/email/gvl/${userRegister.id}/${userRegister.email}`
			);

			router.replace('/(auth)/verify-verification-screen');
		} catch (error) {
			console.error('Registration Failed:', error);
		}
	};

	return (
		<ScrollView
			showsVerticalScrollIndicator={false}
			contentContainerStyle={{ paddingBottom: 80 }}
			className="pt-16 px-10"
		>
			<Text className="font-bold text-center mb-8 text-2xl text-slate-900">
				Register Account
			</Text>

			<FormField
				label="Full Name"
				value={form.name}
				onChangeText={(value) => handleInputChange('name', value)}
				placeholder="Enter your full name..."
			/>
			<FormField
				label="Username"
				value={form.username}
				onChangeText={(value) => handleInputChange('username', value)}
				placeholder="Enter your username..."
			/>
			<FormField
				label="Email"
				value={form.email}
				onChangeText={(value) => handleInputChange('email', value)}
				placeholder="Enter your email..."
				keyboardType="email-address"
			/>
			<FormField
				label="Job"
				value={form.job}
				onChangeText={(value) => handleInputChange('job', value)}
				placeholder="Enter your job..."
			/>
			<BirthdayGenderForm />
			<FormField
				label="Password"
				value={form.password}
				onChangeText={(value) => handleInputChange('password', value)}
				placeholder="Enter your password..."
				secureTextEntry
			/>

			<Button type="main" text="Register" onPress={handleRegister} />
			<Button
				type="secondary"
				text="I already have an account"
				onPress={() => router.replace('/(auth)/login-screen')}
			/>
		</ScrollView>
	);
};

export default RegisterScreen;
