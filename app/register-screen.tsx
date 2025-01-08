import { View, Text, SafeAreaView, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import FormField from '@/components/form/FormField';
import Button from '@/components/form/Button';
import BirthdayGenderForm from '@/components/form/BirthdayGenderForm';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterScreen = () => {
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    job: '',
    password: '',
  });

  const handleInputOnChange = (key: string, value: string) => {
    setForm((prevForm) => ({ ...prevForm, [key]: value }));
  };

  const handleRegister = async () => {
    if (!form.name || !form.username || !form.email || !form.job || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields.');
      return;
    }

    try {
      const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/users`, form);
      console.log('Registration Successful:', response.data);

      if (response && response.data) {
        const userRegister = {
          id: response.data.data.id,
          email: response.data.data.email,
        };

        await AsyncStorage.setItem('userRegister', JSON.stringify(userRegister));

        router.push('/successfull-registration-screen');
      }
    } catch (error) {
      console.error('Registration Failed:', error);
      Alert.alert('Error', 'Registration failed. Please try again.');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }} className="pt-8 px-5">
        <Text style={{ fontSize: 24, fontFamily: 'Inter', marginBottom: 8, textAlign: 'center' }}>Register Account</Text>

        <FormField label="Full Name" value={form.name} onChangeText={(value) => handleInputOnChange('name', value)} placeholder="Enter your full name..." />
        <FormField label="Username" value={form.username} onChangeText={(value) => handleInputOnChange('username', value)} placeholder="Enter your username..." />
        <FormField label="Email" value={form.email} onChangeText={(value) => handleInputOnChange('email', value)} placeholder="Enter your email..." keyboardType="email-address" />
        <FormField label="Job" value={form.job} onChangeText={(value) => handleInputOnChange('job', value)} placeholder="Enter your job..." />
        <BirthdayGenderForm />
        <FormField label="Password" value={form.password} onChangeText={(value) => handleInputOnChange('password', value)} placeholder="Enter your password..." secureTextEntry />

        <Button text="Register" onPress={handleRegister} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;