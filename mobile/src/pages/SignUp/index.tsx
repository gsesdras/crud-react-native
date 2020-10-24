import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";

// import { Container } from './styles';

const SignUp: React.FC = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  const navigation = useNavigation();

  function handleSignUp() {
    navigation.navigate("Dashboard");
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
            onChangeText={() => setName}
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
            onChangeText={() => setEmail}
          />
        </View>
        <View>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            value={pass}
            onChangeText={() => setPass}
          />
        </View>
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
});

export default SignUp;
