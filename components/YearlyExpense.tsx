import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import ArrowRightIcon from '@/assets/svg/arrow/keyboard-arrow-right.svg';

const YearlyExpense = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());
  const [isModalVisible, setIsModalVisible] = useState(false);
  const years = Array.from({ length: 4 }, (_, index) => (currentYear + index).toString());

  useEffect(() => {
    setSelectedYear(currentYear.toString());
  }, [currentYear]);

  return (
    <SafeAreaView className="w-full h-screen">
      <ScrollView className="pt-8 px-5  h-screen ">
        <View className="flex-row justify-between items-center">
          <View>
            <Text className="text-sm font-inter text-slate-400">Your analytics for</Text>
            <Text className="text-2xl font-inter">{selectedYear}</Text>
          </View>
          <TouchableOpacity className="flex-row items-center justify-center w-32  h-12  border border-slate-300 rounded-xl" onPress={() => setIsModalVisible(!isModalVisible)}>
            <Text className="font-inter">{selectedYear}</Text>
            <ArrowRightIcon />
          </TouchableOpacity>
        </View>
        {isModalVisible && (
          <View className=" absolute h-auto right-0 top-16 items-center justify-center gap-2">
            {years.map((year, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  className="flex-row items-center w-32 h-12 justify-center border border-slate-300 bg-white rounded-xl"
                  onPress={() => {
                    setIsModalVisible(false);
                    setSelectedYear(year);
                  }}
                >
                  <Text className="font-inter">{year}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default YearlyExpense;
