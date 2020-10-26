import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../contexts/auth";

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const { signed, signIn, signInResponse } = useAuth();

  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");

  async function handleSignIn() {
    signIn(email, password);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Entre na sua conta</Text>
        <View>
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            secureTextEntry={true}
            autoCapitalize="none"
            style={styles.input}
            value={password}
            onChangeText={setPass}
          />
        </View>
        {signInResponse ? (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{signInResponse}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        <RectButton style={styles.button} onPress={handleSignIn}>
          <Text style={styles.textButton}>Entrar</Text>
        </RectButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "space-between",
  },
  title: {
    marginVertical: 20,
    fontSize: 26,
    fontFamily: "Nunito_600SemiBold",
  },
  label: {
    fontSize: 16,
  },
  input: {
    backgroundColor: "#dfdfdf",
    borderRadius: 5,
    height: 40,
    color: "black",
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    justifyContent: "flex-end",
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
  errorContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e87d81",
    height: 40,
    borderRadius: 5,
  },
  error: {
    color: "white",
    fontFamily: "Nunito_600SemiBold",
    fontSize: 16,
  },
});

export default SignIn;
