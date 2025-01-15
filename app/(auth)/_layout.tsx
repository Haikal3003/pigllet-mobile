import { Stack } from 'expo-router';

export default function Layout() {
	return (
		<Stack screenOptions={{ headerShown: false }}>
			<Stack.Screen name="welcome-screen" />
			<Stack.Screen name="register-screen" />
			<Stack.Screen name="login-screen" />
			<Stack.Screen name="verify-verification-screen" />
			<Stack.Screen name="success-verification-screen" />
		</Stack>
	);
}
