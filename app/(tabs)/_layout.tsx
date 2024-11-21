import React from 'react';
import { Tabs } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import TabBarIcon from '@/components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: 24,
          height: 100,
        },

        tabBarButton: (props) => {
          const { delayLongPress, style, ...restProps }: any = props;
          return <TouchableOpacity {...restProps} activeOpacity={1} className="bg-transparent w-full flex-row justify-center items-center text-center" disabled={restProps.disabled as boolean | undefined} />;
        },

        tabBarIcon: ({ color, size, focused }) => {
          return (
            // <View className="items-center">
            //   {route.name === 'CreateScreen' ? (
            //     <View className="w-[50px] h-[50px] rounded-full bg-red-300/60 items-center justify-center">
            //       <TabBarIcon routeName={route.name} focused={focused} />
            //     </View>
            //   ) : (
            //     <TabBarIcon routeName={route.name} focused={focused} />
            //   )}
            //   {showActivePageIndicator && <View className="absolute w-[4px] h-[4px] rounded-full bg-[#333] -bottom-[12px]" />}
            // </View>
            <TabBarIcon routeName={route.name} focused={focused} />
          );
        },
      })}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="AnalyticsScreen" />
      <Tabs.Screen name="CreateScreen" />
      <Tabs.Screen name="SubscriptionScreen" />
      <Tabs.Screen name="SettingScreen" />
    </Tabs>
  );
}
