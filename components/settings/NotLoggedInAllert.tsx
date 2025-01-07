import { View, Text } from 'react-native';
import React from 'react';
import AccountCircleIcon from '@/assets/svg/settings/account-circle.svg';

const NotLoggedInAllert = () => {
  return (
    <View className="relative w-full bg-red-100 rounded-2xl border border-red-200 p-4">
      <View className="flex-row w-full ">
        <AccountCircleIcon />
        <View className="pl-2 w-[90%] relative ">
          <Text className="text-base text-red-900 font-sans mb-2">You are not logged in!</Text>
          <Text
            className="text-base text-black/50
           font-sans "
          >
            You are not logged in hence your could sync is paused. You can log in by clicking on your profile picture.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NotLoggedInAllert;
