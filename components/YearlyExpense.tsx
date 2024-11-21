import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';

const YearlyExpense = () => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear.toString());

  const years = Array.from({ length: 11 }, (_, index) => (currentYear + index).toString());

  useEffect(() => {
    setSelectedYear(currentYear.toString());
  }, [currentYear]);

  return (
    <SafeAreaView className="pt-8">
      <ScrollView>
        <View className="flex-row justify-between items-center">
          <View>
            <Text>Your analytics for</Text>
            <Text>{selectedYear}</Text>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default YearlyExpense;
