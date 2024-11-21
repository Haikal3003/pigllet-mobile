import MonthlyExpense from '@/components/MonthlyExpense';
import YearlyExpense from '@/components/YearlyExpense';
import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';

export default function AnalyticsScreen() {
  const [selectedTab, setSelectedTab] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="pt-10 px-6">
        <View className="relative flex-row justify-between border border-slate-400 p-1 rounded-full">
          <Pressable className="flex-1 items-center bg-slate-400 border borderblack  justify-center py-2" onPress={() => setSelectedTab('monthly')}>
            <Text className={`text-center ${selectedTab === 'monthly' ? 'text-black' : 'text-gray-600'} font-inter`}>Monthly</Text>
          </Pressable>

          <Pressable className="flex-1 items-center justify-center py-2" onPress={() => setSelectedTab('yearly')}>
            <Text className={`text-center ${selectedTab === 'yearly' ? 'text-black' : 'text-gray-600'} font-inter`}>Yearly</Text>
          </Pressable>
        </View>
      </View>

      <View id="content-tab" className="pt-4">
        {selectedTab === 'monthly' ? <MonthlyExpense /> : <YearlyExpense />}
      </View>
    </SafeAreaView>
  );
}
