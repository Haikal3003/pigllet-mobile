import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import ArrowRightIcon from '@/assets/svg/arrow/keyboard-arrow-right.svg';
import { months } from '@/constants/months';
import Calendar from './Calendar';

const CalendarPicker = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <View>
      <View className="flex-row justify-between">
        <View>
          <Text className="text-base font-inter text-slate-400">Your analytics for</Text>
          <Text className="text-2xl font-inter">Rp 605,000</Text>
        </View>
        <TouchableOpacity className="flex-row items-center justify-center w-auto px-4 h-12 border border-slate-300 rounded-xl" onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text className="font-inter text-slate-500">
            {months[selectedMonth]}, {selectedYear}
          </Text>
          <ArrowRightIcon />
        </TouchableOpacity>
      </View>

      {isModalVisible && (
        <View className="absolute bg-white border border-gray-300 rounded-xl top-16 right-0 w-3/4 p-4 z-40">
          <View className="flex-row flex-wrap justify-between gap-2">
            {months.map((month, i) => (
              <TouchableOpacity
                key={i}
                className={`w-[48%] p-3  rounded-xl border border-slate-300 ${i === selectedMonth ? 'bg-slate-200 ' : 'bg-white '}`}
                onPress={() => {
                  setSelectedMonth(i);
                  setIsModalVisible(false);
                }}
              >
                <Text className={`text-center font-inter text-sm ${i === selectedMonth ? 'text-black' : 'text-slate-500'}`}>{month}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      <View className="pt-8">
        <Calendar selectedYear={selectedYear} selectedMonth={selectedMonth} />
      </View>
    </View>
  );
};

export default CalendarPicker;
