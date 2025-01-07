import { useRouter } from 'expo-router';
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

import NotifIcon from '@/assets/svg/home/notif-active.svg';
import EyeIcon from '@/assets/svg/eye.svg';
import AddIcon from '@/assets/svg/add.svg';
import ArrowRightIcon from '@/assets/svg/arrow/keyboard-arrow-right.svg';

import Activity from '@/components/Activity';

export default function HomeScreen() {
  const router = useRouter();
  
  return (
    <SafeAreaView className="relative bg-gray-50 w-full h-full">
      <ScrollView scrollEnabled={true} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 50 }} className="w-full h-full">
        <View className="flex-row justify-between items-center px-5 pt-8 pb-4">
          <View>
            <Text className="text-4xl font-sans">Hi, John</Text>
            <Text className="text-slate-400 font-sans">Welcome back!</Text>
          </View>

          <NotifIcon />
        </View>

        <View id="balance" className="my-7 px-5 flex-col gap-4">
          <Text className="text-slate-400 font-sans">Your Balance</Text>

          <View className="flex-row gap-4">
            <Text className="text-5xl font-sans text-slate-900">Rp 6,000,000</Text>
            <EyeIcon />
          </View>
        </View>

        <View className="flex-row justify-between px-5 py-4 pb-6">
          <View className="flex-row justify-between items-center">
            <Text className="text-slate-400 font-sans">Wallet</Text>
          </View>

          <View className="flex-row gap-4">
            <View className="bg-gray-100 w-[110px] h-[60px] rounded-lg items-center justify-end py-2">
              <Text className="text-[15px] font-sans">199485858</Text>
            </View>
            <View className="bg-gray-100 w-[110px] h-[60px] rounded-lg items-center justify-end py-2">
              <Text className="text-[15px] font-sans">19285859</Text>
            </View>

            <TouchableOpacity className="bg-red-300/30 w-16 h-16 rounded-full flex-row items-center justify-center border border-dashed border-red-300" onPress={() => router.push('/LoginScreen')}>
              <AddIcon />
            </TouchableOpacity>
          </View>
        </View>

        <View id="activities" className="relative w-full h-full bg-white">
          <View className="flex-row justify-between items-center px-5 py-6">
            <Text className="font-sans text-slate-800">Recent Activity</Text>

            <TouchableOpacity className="flex-row items-center">
              <Text className="font-sans text-slate-400">Details</Text>
              <ArrowRightIcon />
            </TouchableOpacity>
          </View>

          <View id="activity" className="flex-col gap-6">
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
            <Activity />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
