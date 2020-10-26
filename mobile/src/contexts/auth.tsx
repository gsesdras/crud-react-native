import React, { createContext, useContext, useEffect, useState } from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";
import { useNavigation } from "@react-navigation/native";

interface AuthContextData {
  signed: boolean;
  user: object | null;
  loading: boolean;
  signInResponse: object | null;
  signUpResponse: {
    error?: string;
    success?: string;
  } | null;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
  signUp(name: string, email: string, password: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);
  const [loading, setLoading] = useState(true);
  const [signInResponse, setSignInResponse] = useState<object | null>(null);
  const [signUpResponse, setSignUpResponse] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storedUser = await AsyncStorage.getItem("@RNAuth:user");
      const storedToken = await AsyncStorage.getItem("@RNAuth:token");

      if (storedUser && storedToken) {
        api.defaults.headers.Authorization = `Bearer ${storedToken}`;
        setUser(JSON.parse(storedUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorageData();
  }, []);

  async function signIn(email: string, pass: string) {
    try {
      const response = await auth.signIn(email, pass);

      setUser(response.user);
      api.defaults.headers.Authorization = `Bearer ${response.token}`;

      await AsyncStorage.setItem("@RNAuth:user", JSON.stringify(response.user));
      await AsyncStorage.setItem("@RNAuth:token", response.token);
      setSignInResponse(null);
    } catch (error) {
      setSignInResponse(error.error);
    }
  }
  async function signOut() {
    await AsyncStorage.clear();
    api.defaults.headers.Authorization = null;
    setUser(null);
  }
  async function signUp(name: string, email: string, pass: string) {
    try {
      const response = await auth.signUp(name, email, pass);
      signIn(email, pass);
      setSignUpResponse(null);
    } catch (error) {
      setSignUpResponse({ error: error.error });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        loading,
        signInResponse,
        signUpResponse,
        signIn,
        signOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
