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
      <View className="flex-row justify-between mb-8">
        <View>
          <Text className="text-base font-sans text-slate-600">Your total this month</Text>
          <Text className="text-2xl font-sans text-slate-900" style={{fontWeight: 600}}>Rp 605,000</Text>
        </View>

        <TouchableOpacity className="flex-row items-center justify-center w-auto px-4 h-10 border border-red-100 rounded-lg" onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text className="font-sans text-slate-900">
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
                <Text className={`text-center font-sans text-sm ${i === selectedMonth ? 'text-black' : 'text-slate-500'}`}>{month}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}

      <Calendar selectedYear={selectedYear} selectedMonth={selectedMonth} />
    </View>
  );
};

export default CalendarPicker;
