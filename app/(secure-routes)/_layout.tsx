import React from 'react';
import { Tabs } from 'expo-router';
import BottomTabNavigatorIcon from '@/components/BottomTabNavigatorIcon';

const tabsMenu = [
  {name: 'index', title: 'Home', iconType: 'home'},
  {name: 'expense-screen', title: 'Expense', iconType: 'expense'},
  {name: 'create-screen', title: 'Create', iconType: 'create'},
  {name: 'subscription-screen', title: 'Subscriptions', iconType: 'subscriptions'},
  {name: 'profile-screen', title: 'Profile', iconType: 'profile'},
]

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={() => ({
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#fff',
        height: 65,
        alignItems: 'baseline',
        paddingTop: 20,
        paddingBottom: 30
      },
    })}
    >
      {tabsMenu.map(menu => (
        <Tabs.Screen key={menu.name} name={menu.name} options={{title: menu.title, tabBarIcon: ({focused}) => <BottomTabNavigatorIcon type={menu.iconType as any} focused={focused} />}} />
      ))}
    </Tabs>
  );
}