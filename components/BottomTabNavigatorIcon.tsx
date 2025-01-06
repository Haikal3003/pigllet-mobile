import { View } from 'react-native';

import HomeIcon from '@/assets/svg/tab/home.svg';
import HomeFillIcon from '@/assets/svg/tab/home-fill.svg';
import AnalyticsIcon from '@/assets/svg/tab/analytics.svg';
import AnalyticsFillIcon from '@/assets/svg/tab/analytics-fill.svg';
import AddCircledIcon from '@/assets/svg/tab/add-circle.svg';
import AddCircledFillIcon from '@/assets/svg/tab/add-circle-fill.svg';
import SubscriptionIcon from '@/assets/svg/tab/subscription.svg';
import SubsriptionFillIcon from '@/assets/svg/tab/subscription-fill.svg';
import SettingsIcon from '@/assets/svg/tab/settings.svg';
import SettingsFillIcon from '@/assets/svg/tab/settings-fill.svg';

type IconTypes = "home" | 'expense' | 'create' | 'subscriptions' | 'profile'

interface BottomTabNavigatorIcon {
  focused: boolean
  type: IconTypes
}

const BottomTabNavigatorIcon = ({type, focused} : BottomTabNavigatorIcon) => {
  const renderIcon = () => {
    switch (type) {
      case 'home':
        return focused ? <HomeFillIcon /> : <HomeIcon />;
      case 'expense':
        return focused ? <AnalyticsFillIcon /> : <AnalyticsIcon />;
      case 'create':
        return focused ? <AddCircledFillIcon /> : <AddCircledIcon />;
      case 'subscriptions':
        return focused ? <SubsriptionFillIcon /> : <SubscriptionIcon />;
      case 'profile':
        return focused ? <SettingsFillIcon /> : <SettingsIcon />;
      default:
        return null;
    }
  };

  const showActivePageIndicator = type === 'create' ? null : focused;

  return (
    <View className="items-center justify-center w-12 h-12 rounded-full">
      {type === 'create' ? <View className="w-12 h-12 rounded-full bg-red-200 items-center justify-center">{renderIcon()}</View> : renderIcon()}
      <View className={`absolute w-1 h-1 rounded-full bg-red-500 transition-opacity bottom-1 ${focused ? 'opacity-100' : 'opacity-0'}`} />
    </View>
  );
}

export default BottomTabNavigatorIcon