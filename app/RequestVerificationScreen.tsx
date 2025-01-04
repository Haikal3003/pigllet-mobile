import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserRegister {
  id: number;
  email: string;
}

export default function RequestVerificationScreen() {
  const [userRegister, setUserRegister] = useState<UserRegister | null>(null);

  useEffect(() => {
    const getUserRegister = async () => {
      try {
        const storedUserRegister = await AsyncStorage.getItem('userRegister');
        if (storedUserRegister) {
          setUserRegister(JSON.parse(storedUserRegister));
        } else {
          setUserRegister(null);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getUserRegister();
  }, []);

  const handleSendVerificationEmail = async () => {
    if (!userRegister) {
      Alert.alert('Error', 'No user data found.');
      return;
    }

    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/email/gvl/${userRegister.id}/${userRegister.email}`);
      console.log('Verification Email Sent:', response.data);
      await AsyncStorage.removeItem('userRegister');
      setUserRegister(null);
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Failed to send verification email. Please try again.');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <TouchableOpacity className="bg-red-300 p-4 rounded-md" onPress={handleSendVerificationEmail}>
        <Text className="text-center text-lg font-inter">Send Verification Email</Text>
      </TouchableOpacity>
    </View>
  );
}
