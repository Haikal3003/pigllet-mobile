import { Text, View } from 'react-native';
import HomeIcon from '@/assets/svg/tab/home.svg';

const Activity = () => {
  return (
    <View className="flex-row justify-between items-center w-full px-6 ">
      <View className="flex-row justify-start items-center gap-4">
        <View id="image-icon" className="w-[65px] h-[65px] bg-gray-100 rounded-full items-center justify-center">
          <HomeIcon />
        </View>

        <View className="ml-6">
          <Text id="title" className="font-inter text-[15px]">
            Some Payment
          </Text>
          <Text id="date" className="font-inter text-[10px]">
            Tues, 12 Nov 2024
          </Text>
        </View>
      </View>

      <View className="items-end">
        <Text id="money" className="font-inter">
          - Rp 250,00
        </Text>
        <Text id="type" className="font-inter text-right">
          Transfer
        </Text>
      </View>
    </View>
  );
};

export default Activity;
