import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FilterIcon from '@/assets/svg/filter.svg';
import SubscriptionsCard from './SubscriptionsCard';

const SubscriptionsList = () => {
  return (
    <View className="pt-8">
      <View className="flex-row justify-between items-center">
        <View>
          <Text className="text-lg font-inter">Subscriptions</Text>
        </View>
        <TouchableOpacity className="flex-row items-center justify-center px-4 h-12 border border-slate-300 rounded-xl">
          <FilterIcon />
        </TouchableOpacity>
      </View>

      <View className="mt-8 gap-6">
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
        <SubscriptionsCard />
      </View>
    </View>
  );
};

export default SubscriptionsList;
