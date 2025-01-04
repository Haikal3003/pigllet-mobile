import React, { createContext, ReactNode, useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextType {
  userSession: {};
  updateUserSession: (session: any) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [userSession, setUserSession] = useState<any>({});

  const setAxiosHeaders = (token?: string) => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  };

  const getUserSession = async () => {
    try {
      const session = await AsyncStorage.getItem('userSession');
      const sessionData = session ? JSON.parse(session) : {};
      setAxiosHeaders(sessionData.token);
      setUserSession(sessionData);
    } catch (error) {
      console.log(error);
      setUserSession({});
    }
  };

  const updateUserSession = async (session: any) => {
    try {
      await AsyncStorage.setItem('userSession', JSON.stringify(session));
      setAxiosHeaders(session.token);
      setUserSession(session);
    } catch (error) {
      return Promise.reject(error);
    }
  };

  useEffect(() => {
    getUserSession();
  }, []);

  return <AuthContext.Provider value={{ userSession, updateUserSession }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
