import { Stack } from 'expo-router';
import { AuthContext, AuthProvider } from '@/context/AuthProvider';
import React, { useContext, useEffect } from 'react';
import { useFonts } from 'expo-font';
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
  const [fontsLoaded, fontsError] = useFonts({
    inter: require('../assets/fonts/geist.ttf'),
  });

  useEffect(() => {
    if (fontsError) throw fontsError;
  }, [fontsError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

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
        <Stack.Screen name="(tabs)" />
      ) : (
        <>
          <Stack.Screen name="LoginScreen" />
          <Stack.Screen name="RegisterScreen" />
          <Stack.Screen name="RequestVerificationScreen" />
        </>
      )}
    </Stack>
  );
}
