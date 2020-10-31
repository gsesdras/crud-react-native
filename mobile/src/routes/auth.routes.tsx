import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/Landing";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import ForgotPasswordDone from "../pages/ForgotPassword/done";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Landing"
        component={Landing}
        options={{ title: "CRUD React Native" }}
      />
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{ title: "Faça o login" }}
      />
      <AuthStack.Screen
        name="SignUp"
        component={SignUp}
        options={{ title: "Cadastre-se" }}
      />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ title: "Esqueci minha senha" }}
      />
      <AuthStack.Screen
        name="ForgotPasswordDone"
        component={ForgotPasswordDone}
        options={{ title: "Esqueci minha senha" }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
