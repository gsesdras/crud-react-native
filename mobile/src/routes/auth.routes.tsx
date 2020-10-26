import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Landing from "../pages/Landing";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Landing" component={Landing} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export default AuthRoutes;
