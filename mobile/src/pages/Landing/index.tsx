import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

// import { Container } from './styles';

const Landing: React.FC = () => {
  const navigation = useNavigation();

  function handleGoToSignIn() {
    navigation.navigate("SignIn");
  }
  function handleGoToSignUp() {
    navigation.navigate("SignUp");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Junte-se a nós</Text>
      <RectButton style={styles.button} onPress={handleGoToSignIn}>
        <Text style={styles.textButton}>Sign In</Text>
      </RectButton>
      <RectButton style={styles.button} onPress={handleGoToSignUp}>
        <Text style={styles.textButton}>Sign Up</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    padding: 25,
  },
  titulo: {
    marginBottom: 0,
    fontFamily: "Nunito_600SemiBold",
    fontSize: 26,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#096cff",
    height: 60,
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

export default Landing;
