import { ScrollView, Text, View, Image, Button } from 'react-native';

import EmailImage from '@/assets/images/email.png';
import { SendEmailVerification } from '@/api/email-verification/send-email-verification';

export default function VerifyVerificationScreen() {
	const handleResendEmail = async () => {
		try {
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<ScrollView contentContainerStyle={{ padding: 20 }}>
			<View style={{ alignItems: 'center' }}>
				<Image source={EmailImage} resizeMode="contain" />
				<Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20 }}>
					Verify Your Email
				</Text>
				<Text style={{ fontSize: 16, marginTop: 10, textAlign: 'center' }}>
					We have sent a verification email to your inbox. Please check your
					email and verify your account.
				</Text>

				<Button title="Resend Email" onPress={handleResendEmail} />
			</View>
		</ScrollView>
	);
}
