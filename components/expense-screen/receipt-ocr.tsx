import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import AddPhotoAlternateIcon from '@/assets/svg/add_photo_alternate_24dp_E8EAED_FILL0_wght300_GRAD0_opsz24.svg';
import TextCompareIcon from '@/assets/svg/text_compare_24dp_E8EAED_FILL0_wght300_GRAD0_opsz24.svg';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';

export default function RecieptOCR() {
	const [image, setImage] = useState<string | null>(null);

	const pickImage = async () => {
		// Request permission to access media library
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
		if (status !== 'granted') {
			alert('Sorry, we need media library permissions to make this work!');
			return;
		}

		// Open the image picker
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.Images, // Allow only images
			allowsEditing: true, // Allow users to crop the image
			quality: 1, // Image quality (1 = highest)
		});

		if (!result.canceled) {
			setImage(result.assets[0].uri); // Set the selected image URI
		}
	};

	return (
		<View className="justicy-center items-center px-6 gap-4">
			<TouchableOpacity
				onPress={pickImage}
				className="bg-red-50 border border-red-300 shadow-inner relative border-dashed rounded-xl w-full justify-center items-center gap-8 p-4"
			>
				<AddPhotoAlternateIcon />
				<Text className="text-[#9C041E] tracking-tight">
					Scan image from your storage
				</Text>

				<Text className="text-[#9C041E] tracking-tight absolute top-2 left-2 text-sm opacity-40 border border-red-600 px-2 rounded-md">
					Beta version
				</Text>
			</TouchableOpacity>

			{image && (
				<View className="gap-4">
					<Image
						source={{ uri: image }}
						style={{
							width: Dimensions.get('screen').width - 48,
							height: Dimensions.get('screen').width - 48,
							borderRadius: 12,
						}}
						className="shadow-md"
					/>

					<View className="flex-row gap-2 w-full justify-end">
						<TouchableOpacity
							onPress={() => setImage(null)}
							className="flex-row border py-2 px-4 rounded-lg items-center justify-center gap-2 bg-slate-100 border-slate-300"
						>
							<Text>Cancel Selection</Text>
						</TouchableOpacity>

						<TouchableOpacity className="flex-row border py-2 px-4 rounded-lg items-center justify-center gap-2 bg-[#FF4863] border-[#FF6A83]">
							<TextCompareIcon />
							<Text className="text-lg tracking-tight text-white">
								Scan now
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			)}
		</View>
	);
}
