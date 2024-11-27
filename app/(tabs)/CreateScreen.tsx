import ManuallyTabScreen from '@/components/create/manuallyTabScreen';
import ScannerTabScreen from '@/components/create/scannerTabScreen';
import TabButton from '@/components/TabButton';
import { useState } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

export default function CreateScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('manually');
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <ScrollView className="pt-10 px-6" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }}>
        <View className="relative flex-row justify-between border border-slate-400 p-1 rounded-xl">
          <TabButton label="manually" text="Manually" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <TabButton label="scanner" text="Scanner" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View>
        <View className="mt-8">{selectedTab === 'manually' ? <ManuallyTabScreen /> : <ScannerTabScreen />}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
