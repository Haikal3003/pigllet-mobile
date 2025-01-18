import { Stack } from 'expo-router';
import AuthProvider from '@/context/AuthProvider';

import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';

import '../global.css';
import ExpenseProvider from '@/context/ExpensesProvider';
import UserProvider from '@/context/UserProvider';
import SubscriptionProvider from '@/context/SubscriptionProvider';

export { ErrorBoundary } from 'expo-router';

export const unstable_settings = {
	initialRouteName: '(secure-routes)',
};

// Prevent splash screen auto-hide
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	return (
		<AuthProvider>
			<UserProvider>
				<ExpenseProvider>
					<SubscriptionProvider>
						<Stack screenOptions={{ headerShown: false }}>
							<Stack.Screen name="index" />
							<Stack.Screen name="(root)" />
							<Stack.Screen name="(auth)" />
							<Stack.Screen name="create-expense-form-screen" />
							<Stack.Screen name="create-subscription-form-screen" />
							<Stack.Screen
								name="expense-details/:id"
								options={{ presentation: 'modal' }}
							/>

							<Stack.Screen
								name="expense-edit/:id"
								options={{ presentation: 'modal', animation: 'fade' }}
							/>
							<Stack.Screen
								name="expense-ocr/:id"
								options={{ presentation: 'modal', animation: 'fade' }}
							/>
							<Stack.Screen
								name="subscription-details/:id"
								options={{ presentation: 'modal' }}
							/>
							<Stack.Screen
								name="subscription-edit/:id"
								options={{ presentation: 'modal', animation: 'fade' }}
							/>
						</Stack>
					</SubscriptionProvider>
				</ExpenseProvider>
			</UserProvider>
		</AuthProvider>
	);
}
