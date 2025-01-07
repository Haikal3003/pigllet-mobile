import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import BarChart from '../BarChart';
import ArrowDownIcon from '@/assets/svg/arrow/keyboard-arrow-down.svg';

interface ExpenseProps {
  selectedTab: string;
}

const ExpenseMonthly = ({ selectedTab }: ExpenseProps) => {
  return (
    <View>
      <View>
        <View>
          <Text className="text-slate-400 font-sans text-base">Showing expense for</Text>
          <Text className="text-2xl font-sans">November, 2024</Text>
        </View>
        <View className="flex-row justify-end gap-2 mt-2">
          <TouchableOpacity className="py-2 px-6 border border-slate-200 rounded-xl flex-row justify-center items-center place-content-end">
            <Text className="text-slate-400 font-sans text-sm">November</Text>
            <ArrowDownIcon />
          </TouchableOpacity>

          <TouchableOpacity className="py-2 px-6 border border-slate-200 rounded-xl flex-row justify-center items-center place-content-end">
            <Text className="text-slate-400 font-sans text-sm">2024</Text>
            <ArrowDownIcon />
          </TouchableOpacity>
        </View>
      </View>
      <BarChart selectedTab={selectedTab} />
    </View>
  );
};

export default ExpenseMonthly;
