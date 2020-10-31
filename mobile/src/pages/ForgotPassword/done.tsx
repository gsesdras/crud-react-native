import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";

function handleGoToSignIn() {}

const ForgotPasswordDone: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Uma nova senha foi enviada para o seu e-mail.
      </Text>
      <View style={styles.buttonContainer}>
        <RectButton style={styles.button} onPress={handleGoToSignIn}>
          <Text style={styles.textButton}>Fazer login</Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 22,
    textAlign: "center",
  },
  buttonContainer: {
    justifyContent: "flex-end",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#096cff",
    width: 300,
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

export default ForgotPasswordDone;
