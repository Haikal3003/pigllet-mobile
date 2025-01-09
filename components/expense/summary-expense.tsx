import { View, Text, Pressable } from 'react-native';
import React from 'react';
import ArrowDropdownIcon from '@/assets/svg/arrow/arrow-drop-down.svg';
import ArrowDropupIcon from '@/assets/svg/arrow/arrow-drop-up.svg';

const SummaryExpense = () => {
  return (
    <View className="flex-row justify-between items-center">
      <Pressable className="flex-1 flex-row border-">
        <ArrowDropupIcon />
        <View>
          <Text className="text-sm text-slate-400 font-sans">Today income</Text>
          <Text className="text-base font-sans">Rp 6,000,000</Text>
        </View>
      </Pressable>

      <Pressable className="flex-1 flex-row">
        <ArrowDropdownIcon />
        <View>
          <Text className="text-sm text-slate-400 font-sans">Today expense</Text>
          <Text className="text-base font-sans">- Rp 4,365,000</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default SummaryExpense;
