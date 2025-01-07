import { View, Text, TextInput, TextInputProps, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import EyeVisibilityOnIcon from '@/assets/svg/visibility/visibility-on.svg';
import EyeVisibilityOffIcon from '@/assets/svg/visibility/visibility-off.svg';

type FormFieldProps = TextInputProps & {
  label: string;
};

const FormField: React.FC<FormFieldProps> = ({ label, ...props }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPasswordField = label.toLowerCase() === 'password';

  return (
    <View className="mb-4">
      <Text className="text-base mb-2">{label}</Text>
      <View>
        <TextInput className="border border-slate-300 rounded-full p-4 text-base font-sans" secureTextEntry={isPasswordField && !isPasswordVisible} {...props} />

        {isPasswordField && (
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} className="absolute right-4 top-1/2 -translate-y-1/2">
            {!isPasswordVisible ? <EyeVisibilityOffIcon /> : <EyeVisibilityOnIcon />}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
