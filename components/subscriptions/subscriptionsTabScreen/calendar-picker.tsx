import { useState } from 'react';
import { months } from '@/constants/months';
import { View, Text, TouchableOpacity } from 'react-native';

import ArrowRightIcon from '@/assets/svg/arrow/keyboard-arrow-right.svg';
import ArrowDownIcon from '@/assets/svg/arrow/keyboard-arrow-down.svg'

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
          <Text className="text-2xl font-sans text-[#FF2C4A]" style={{fontWeight: 800}}>Rp 605,000</Text>
        </View>

        <TouchableOpacity className="flex-row items-center justify-center w-auto px-4 h-10 border border-red-100 rounded-lg" onPress={() => setIsModalVisible(!isModalVisible)}>
          <Text className="font-sans text-slate-900">
            {months[selectedMonth]}, {selectedYear}
          </Text>

          {isModalVisible ? <ArrowDownIcon /> : <ArrowRightIcon />}
        </TouchableOpacity>
      </View>

      {isModalVisible && (
        <View className="absolute bg-white border border-slate-100 rounded-xl top-12 right-0 w-[245px] p-2 z-40 flex-row flex-wrap justify-between gap-1">
            {months.map((month, i) => (
              <TouchableOpacity
                key={i}
                className={`w-32 p-2 rounded-lg border ${i === selectedMonth ? 'bg-[#FF4863] border-[#FF6A83] ' : 'bg-white border-slate-300 '}`}
                onPress={() => {
                  setSelectedMonth(i);
                  setIsModalVisible(false);
                }}
              >
                <Text className={`text-center font-sans text-sm ${i === selectedMonth ? 'text-white' : 'text-slate-600'}`}>{month}</Text>
              </TouchableOpacity>
            ))}
        </View>
      )}

      <Calendar selectedYear={selectedYear} selectedMonth={selectedMonth} />
    </View>
  );
};

export default CalendarPicker;
