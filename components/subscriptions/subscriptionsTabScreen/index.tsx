import { View, Text } from 'react-native';
import React from 'react';
import CalendarPicker from './calendar-picker';
import SubscriptionsList from './subscriptions-list';

const SubscriptionTabScreen = () => {
  return (
    <View>
      <CalendarPicker />
      <SubscriptionsList />
    </View>
  );
};

export default SubscriptionTabScreen;
