import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import FormField from '@/components/form/FormField';
import Button from '@/components/form/Button';

const LoginScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }} className="pt-8 px-5">
        <Text className="text-2xl font-sans mb-8 text-center">Login</Text>

        <FormField label="Email" placeholder="Enter your email..." keyboardType="email-address" />

        <FormField label="Password" placeholder="Enter your password..." />

        <Button text="Login" onPress={() => router.push('/RegisterScreen')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
