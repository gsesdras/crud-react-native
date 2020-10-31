import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import api from "../../services/api";

// import { Container } from './styles';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const navigation = useNavigation();

  async function handleSend() {
    try {
      const result = await api.post("/forgot_password", { email });
      navigation.navigate("ForgotPasswordDone");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Qual o email da sua conta?</Text>
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
      </View>
      <View style={styles.buttonContainer}>
        <RectButton style={styles.button} onPress={handleSend}>
          <Text style={styles.textButton}>Recuperar senha</Text>
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
});

export default SignIn;
