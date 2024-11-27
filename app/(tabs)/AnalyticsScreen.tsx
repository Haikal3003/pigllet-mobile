import TabButton from '@/components/TabButton';
import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';

export default function AnalyticsScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('monthly');

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="pt-10 px-6">
        <View className="relative flex-row justify-between border border-slate-400 p-1 rounded-xl">
          <TabButton label="daily" text="Daily" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <TabButton label="monthly" text="Monthly" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <TabButton label="yearly" text="Yearly" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View>
      </View>

      <View id="content-tab" className="pt-4"></View>
    </SafeAreaView>
  );
}
