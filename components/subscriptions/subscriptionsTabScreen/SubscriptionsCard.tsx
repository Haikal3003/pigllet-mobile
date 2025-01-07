import { Text, View } from 'react-native';

type Subscription = {id: number, title: string, due_date: string, is_paid: boolean, total: number}

const SubscriptionsCard = (props: Subscription) => {
  return (
    <View className="flex-row justify-between gap-6 items-start">
      <View>
        <Text className="font-sans text-base text-slate-900">{props.title}</Text>
        <Text className="font-sans text-sm text-slate-600">Due Tues, 12 Nov 2024</Text>
      </View>

      <View className="items-end">
        <Text className={`font-sans text-xs rounded-full px-3 p-[2px] text-white ${props.is_paid ? 'bg-[#3AC100]' : 'bg-[#F0334F]'}`}>{props.is_paid ? 'Paid' : 'Not Paid'}</Text>
        
        <Text className="font-sans text-base">Rp {props.total}</Text>
      </View>
    </View>
  );
};

export default SubscriptionsCard;
