import { View, Text } from 'react-native';
import React from 'react';
import CalendarPicker from './CalendarPicker';
import SubscriptionsList from './SubscriptionsList';

const SubscriptionTabScreen = () => {
  return (
    <View>
      <CalendarPicker />
      <SubscriptionsList />
    </View>
  );
};

export default SubscriptionTabScreen;
