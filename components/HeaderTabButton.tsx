import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface HeaderTabButtonProps {
  label: string;
  text: string;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const HeaderTabButton = ({ label, text, selectedTab, setSelectedTab }: HeaderTabButtonProps) => {
  return (
    <Pressable className={`flex-1 items-center ${selectedTab === label ? 'bg-slate-200 border border-slate-400' : 'border-transparent'}   justify-center py-2 rounded-xl`} onPress={() => setSelectedTab(label)}>
      <Text className={`text-center ${selectedTab === label ? 'text-black' : 'text-gray-600'} font-inter`}>{text}</Text>
    </Pressable>
  );
};

export default HeaderTabButton;