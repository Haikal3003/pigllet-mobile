import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import BarChart from '../BarChart';
import CalendarIcon from '@/assets/svg/calendar.svg';

interface ExpenseProps {
  selectedTab: string;
}

const ExpenseDaily = ({ selectedTab }: ExpenseProps) => {
  return (
    <View>
      <View className="mb-10">
        <View>
          <Text className="text-slate-400 font-sans text-base">Showing expense for</Text>
          <Text className="text-2xl font-sans">November 12, 2024</Text>
        </View>
        <View className="flex-row justify-end mt-2">
          <TouchableOpacity className="py-2 px-6 border border-slate-200 rounded-xl flex-row justify-center items-center place-content-end">
            <CalendarIcon />
          </TouchableOpacity>
        </View>
      </View>

      <BarChart selectedTab={selectedTab} />
    </View>
  );
};

export default ExpenseDaily;
