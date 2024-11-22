import { Text, View } from 'react-native';
import React from 'react';
import ImageIcon from '@/assets/svg/image.svg';

const SubscriptionsCard = () => {
  return (
    <View className="flex-row justify-between">
      <View className="flex-row">
        <View className="w-[60px] h-[60px] bg-gray-100 rounded-full items-center justify-center">
          <ImageIcon />
        </View>
        <View className="ml-6">
          <Text className="font-inter text-base">Netflix</Text>
          <Text className="font-inter text-sm text-slate-400">Due Tues, 12 Nov 2024</Text>
          <Text className="font-inter text-sm text-slate-400">In-app payment</Text>
        </View>
      </View>

      <View className="items-end">
        <View className="px-4 py-1 bg-slate-100 rounded-full">
          <Text className="font-inter text-sm text-slate-400">Unpaid</Text>
        </View>
        <Text className="font-inter text-lg">Rp 50,000</Text>
      </View>
    </View>
  );
};

export default SubscriptionsCard;
