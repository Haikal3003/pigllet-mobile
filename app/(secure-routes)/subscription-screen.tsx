import { useState } from 'react';
import { View, ScrollView } from 'react-native';

import AnalyticsTabScreen from '@/components/subscriptions/analyticsTabScreen';
import SubscriptionTabScreen from '@/components/subscriptions/subscriptionsTabScreen';
import TabButton from '@/components/HeaderTabButton';

export default function SubscriptionScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('subscriptions');

  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 80 }} className="flex-1 w-full bg-white px-6 pt-14">
        <View className="relative flex-row justify-between border border-red-100 p-1 rounded-xl mb-8 bg-slate-100">
          <TabButton label="subscriptions" text="Subscriptions" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <TabButton label="analytics" text="Analytics" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View>

        {selectedTab === 'subscriptions' ? <SubscriptionTabScreen /> : <AnalyticsTabScreen />}
    </ScrollView>
  );
}
