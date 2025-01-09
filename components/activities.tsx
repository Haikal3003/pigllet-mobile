import { Text, View } from 'react-native';
import ImageIcon from '@/assets/svg/image.svg';

const Activity = () => {
  return (
    <View className="flex-row justify-between  w-full px-6 ">
      <View className="flex-row justify-start  gap-4">
        <View className="w-[65px] h-[65px] bg-gray-100 rounded-full items-center justify-center">
          <ImageIcon />
        </View>

        <View className="ml-6">
          <Text className="font-sans text-base">Some Payment</Text>
          <Text className="font-sans text-sm text-slate-400">Tues, 12 Nov 2024</Text>

          <Text className="font-sans text-sm text-slate-400">Paid with DANA</Text>
        </View>
      </View>

      <View className="items-end">
        <Text className="font-sans text-base">- Rp 250,00</Text>
        <Text className="font-sans  text-sm text-slate-400">Transfer</Text>

        <View className="bg-slate-200 w-full px-4 items-center justify-center h-8 rounded-full">
          <Text className="font-sans text-xs text-slate-500">Transportation</Text>
        </View>
      </View>
    </View>
  );
};

export default Activity;
