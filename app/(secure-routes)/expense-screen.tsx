import ExpenseDaily from '@/components/expense/ExpenseDaily';
import ExpenseMonthly from '@/components/expense/ExpenseMonthly';
import ExpenseYearly from '@/components/expense/ExpenseYearly';
import HeaderTabButton from '@/components/HeaderTabButton';
import { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Pressable } from 'react-native';

export default function ExpenseScreen() {
  const [selectedTab, setSelectedTab] = useState<string>('daily');

  const renderContent = () => {
    if (selectedTab === 'daily') {
      return <ExpenseDaily selectedTab={selectedTab} />;
    }

    if (selectedTab === 'monthly') {
      return <ExpenseMonthly selectedTab={selectedTab} />;
    }

    if (selectedTab === 'yearly') {
      return <ExpenseYearly selectedTab={selectedTab} />;
    }
  };

  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="pt-10 px-6">
        <View className="relative flex-row justify-between border border-slate-400 p-1 rounded-xl">
          <HeaderTabButton label="daily" text="Daily" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <HeaderTabButton label="monthly" text="Monthly" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          <HeaderTabButton label="yearly" text="Yearly" selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        </View>
      </View>

      <View id="content-tab" className="mt-8 px-5">
        {renderContent()}
      </View>
    </SafeAreaView>
  );
}
