import { View, Text } from 'react-native';
import React from 'react';
import { days } from '@/constants/days';

const Calendar = ({ selectedYear, selectedMonth }: any) => {
  const firstDayofMonth = new Date(selectedYear, selectedMonth, 1).getDay();
  const lastDateofMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const lastDayofMonth = new Date(selectedYear, selectedMonth, lastDateofMonth).getDay();
  const lastDateofLastMonth = new Date(selectedYear, selectedMonth, 0).getDate();

  const prevDates = Array.from({ length: firstDayofMonth }, (_, i) => lastDateofLastMonth - firstDayofMonth + i + 1);
  const currentDates = Array.from({ length: lastDateofMonth }, (_, i) => i + 1);
  const nextDates = Array.from({ length: 6 - lastDayofMonth }, (_, i) => i + 1);

  return (
    <View>
      <View className="flex-row items-center justify-center">
        {days.map((day, i) => (
          <View key={i} className="flex-1 items-center">
            <Text className="text-base font-inter ">{day}</Text>
          </View>
        ))}
      </View>

      <View className="flex-row flex-wrap justify-start mt-4">
        {prevDates.map((date, i) => (
          <View key={`prev-${i}`} className="w-[14.28%] h-16 items-center justify-center">
            <Text className="text-gray-400 font-inter text-sm">{date}</Text>
          </View>
        ))}

        {currentDates.map((date, i) => (
          <View key={`current-${i}`} className={`w-[14.28%] h-16 items-center justify-center `}>
            <Text className="font-inter text-sm">{date}</Text>
          </View>
        ))}

        {nextDates.map((date, i) => (
          <View key={`next-${i}`} className="w-[14.28%] h-16 items-center justify-center">
            <Text className="text-gray-400 font-inter text-sm">{date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calendar;
