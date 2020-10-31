import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigation = useNavigation();

  function handleSignOut() {
    signOut();
  }
  function handleChangePassword() {
    navigation.navigate("ChangePassword");
  }
  return (
    <View style={styles.container}>
      <Text>Olá, {user?.name}</Text>
      <RectButton style={styles.button} onPress={handleSignOut}>
        <Text style={styles.textButton}>Sair</Text>
      </RectButton>
      <RectButton style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.textButton}>Redefinir senha</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#096cff",
    height: 60,
    width: Dimensions.get("window").width - 40,
    borderRadius: 5,
    marginVertical: 7,
    elevation: 5,
  },
  textButton: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Nunito_400Regular",
  },
});

export default Dashboard;
