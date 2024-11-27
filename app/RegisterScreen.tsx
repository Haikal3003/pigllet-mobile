import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import FormField from '@/components/form/FormField';
import Button from '@/components/form/Button';
import BirthdayGenderForm from '@/components/form/BirthdayGenderForm';

const RegisterScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }} className="pt-8 px-5">
        <Text className="text-2xl font-inter mb-8 text-center">Register Account</Text>

        <FormField label="Fullname" placeholder="Enter your fullname..." />
        <FormField label="Username" placeholder="Enter your username..." />
        <FormField label="Email" placeholder="Enter your email..." keyboardType="email-address" />
        <FormField label="Job" placeholder="Enter your job..." />

        <BirthdayGenderForm />

        <FormField label="Password" placeholder="Enter your password..." />

        <Button text="Register" onPress={() => router.push('/LoginScreen')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
