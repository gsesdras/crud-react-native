import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../contexts/auth";

// import { Container } from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const { signUp, signUpResponse } = useAuth();

  function handleSignUp() {
    signUp(name, email, pass);
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Cadastre sua conta</Text>
        <View>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            autoCapitalize="words"
            autoCompleteType="name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>
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
            value={pass}
            onChangeText={setPass}
          />
        </View>
        {signUpResponse?.error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{signUpResponse.error}</Text>
          </View>
        ) : null}
        {signUpResponse?.success ? (
          <View style={styles.successContainer}>
            <Text style={styles.error}>{signUpResponse.success}</Text>
          </View>
        ) : null}
      </View>
      <View style={styles.buttonContainer}>
        <RectButton style={styles.button} onPress={handleSignUp}>
          <Text style={styles.textButton}>Cadastrar</Text>
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
  successContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#95f098",
    height: 40,
    borderRadius: 5,
  },
});

export default SignUp;
