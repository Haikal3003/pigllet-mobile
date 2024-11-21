import React, { useEffect } from 'react';
import { View } from 'react-native';
import HomeIcon from '@/assets/svg/tab/home.svg';
import HomeFillIcon from '@/assets/svg/tab/home-fill.svg';
import AnalyticsIcon from '@/assets/svg/tab/analytics.svg';
import AnalyticsFillIcon from '@/assets/svg/tab/analytics-fill.svg';
import AddCircleIcon from '@/assets/svg/tab/add-circle.svg';
import AddCircleFillIcon from '@/assets/svg/tab/add-circle-fill.svg';
import SubscriptionIcon from '@/assets/svg/tab/subscription.svg';
import SubsriptionFillIcon from '@/assets/svg/tab/subscription-fill.svg';
import SettingsIcon from '@/assets/svg/tab/settings.svg';
import SettingsFillIcon from '@/assets/svg/tab/settings-fill.svg';

interface TabBarIconProps {
  routeName: string;
  focused: boolean;
}

const TabBarIcon = ({ routeName, focused }: TabBarIconProps) => {
  const renderIcon = () => {
    switch (routeName) {
      case 'index':
        return focused ? <HomeFillIcon /> : <HomeIcon />;
      case 'AnalyticsScreen':
        return focused ? <AnalyticsFillIcon /> : <AnalyticsIcon />;
      case 'CreateScreen':
        return focused ? <AddCircleFillIcon /> : <AddCircleIcon />;
      case 'SubscriptionScreen':
        return focused ? <SubsriptionFillIcon /> : <SubscriptionIcon />;
      case 'SettingScreen':
        return focused ? <SettingsFillIcon /> : <SettingsIcon />;
      default:
        return null;
    }
  };

  const showActivePageIndicator = routeName === 'CreateScreen' ? null : focused;

  return (
    <View className="items-center justify-center">
      {routeName === 'CreateScreen' ? <View className="w-12 h-12 rounded-full bg-red-200 items-center justify-center">{renderIcon()}</View> : renderIcon()}
      {showActivePageIndicator && <View className="absolute w-1 h-1 rounded-full bg-gray-900 -bottom-3 " />}
    </View>
  );
};

export default TabBarIcon;
