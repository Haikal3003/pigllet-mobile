import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  onPress: () => void;
}

const Button = ({ text, onPress, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className={'border border-slate-300 py-3 rounded-full items-center mt-6'} {...props}>
      <Text className=" text-lg font-inter">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
