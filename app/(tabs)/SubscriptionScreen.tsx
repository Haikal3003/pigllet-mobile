import SubscriptionTabScreen from '@/components/subscriptions';
import CalendarPicker from '@/components/subscriptions/CalendarPicker';
import SubscriptionsList from '@/components/subscriptions/SubscriptionsList';
import TabButton from '@/components/TabButton';
import { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

export default function SubscriptionScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('subscriptions');
  return (
    <SafeAreaView className=" w-full h-full bg-white">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 60 }} className="flex-1 w-full h-full pt-10">
        <View className="flex-1 px-5">
          <View className="relative flex-row justify-between border border-slate-400 p-1 rounded-xl">
            <TabButton label="subscriptions" text="Subscriptions" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <TabButton label="analytics" text="Analytics" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </View>

          {selectedTab === 'subscriptions' ? <SubscriptionTabScreen /> : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
