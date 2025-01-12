import { Stack } from 'expo-router';
import { AuthContext, AuthProvider } from '@/context/AuthProvider';
import React, { useContext } from 'react';
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
			<RootLayoutNav />
		</AuthProvider>
	);
}

function RootLayoutNav() {
	const authContext = useContext(AuthContext);

	return (
		<Stack screenOptions={{ headerShown: false }}>
			{authContext?.userSession ? (
				<Stack.Screen name="(secure-routes)" />
			) : (
				<>
					<Stack.Screen name="login-screen" />
					<Stack.Screen name="register-screen" />
				</>
			)}
		</Stack>
	);
}
