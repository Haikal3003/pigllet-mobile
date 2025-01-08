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
      <View className="mb-8 flex-row justify-between">
        <View className='w-[70%]'>
          <Text className="text-slate-600 font-sans text-base">Showing expense for</Text>
          <Text className="text-2xl font-sans text-[#FF2C4A]" style={{fontWeight: 800}}>November 12, 2024</Text>
        </View>

        <TouchableOpacity className="py-2 px-6 w-10 h-10 border border-red-100 rounded-xl flex-row justify-center items-center place-content-end">
          <CalendarIcon />
        </TouchableOpacity>
      </View>

      <BarChart selectedTab={selectedTab} />
    </View>
  );
};

export default ExpenseDaily;
