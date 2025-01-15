import { Stack } from 'expo-router';
import { AuthProvider } from '@/context/AuthProvider';

import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import '../global.css';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
	initialRouteName: '(secure-routes)',
};

// Prevent splash screen auto-hide
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	return (
		<AuthProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="index" />
				<Stack.Screen name="(root)" />
				<Stack.Screen name="(auth)" />
				<Stack.Screen name="create-expense-form-screen" />
			</Stack>
		</AuthProvider>
	);
}
