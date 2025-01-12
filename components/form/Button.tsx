import {
	View,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native';
import React from 'react';

interface ButtonProps extends TouchableOpacityProps {
	text: string;
	onPress: () => void;
	type: 'main' | 'secondary';
}

const Button = ({ text, onPress, type, ...props }: ButtonProps) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			className={`py-2 rounded-lg items-center mt-6 border ${
				type === 'main'
					? 'bg-[#FF4863] border-[#FF6A83]'
					: 'bg-slate-100 border-slate-300'
			}`}
			{...props}
		>
			<Text
				className={`text-base ${
					type === 'main' ? 'text-white' : 'text-slate-900'
				}`}
			>
				{text}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;
