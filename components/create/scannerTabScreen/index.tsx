import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import AddImageIcon from '@/assets/svg/add-image.svg';

const ScannerTabScreen = () => {
  return (
    <View>
      <TouchableOpacity className="flex-1 py-6 items-center gap-4    bg-slate-100 rounded-xl border border-slate-500 border-dashed ">
        <AddImageIcon />
        <Text className="text-center font-inter text-sm text-slate-400">Scan image from your storage</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScannerTabScreen;
