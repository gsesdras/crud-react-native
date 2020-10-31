import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../contexts/auth";
import api from "../../services/api";

// import { Container } from './styles';

const ChangePassword: React.FC = () => {
  const { user } = useAuth();
  const [oldPass, setOld] = useState<string>("");
  const [newPass, setNew] = useState<string>("");
  const navigation = useNavigation();

  async function handleChangePassword() {
    try {
      await api.put(`/users/${user?.id}`, {
        oldPassword: oldPass,
        password: newPass,
      });
      navigation.navigate("Dashboard");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Preencha os campos para redefinir sua senha
      </Text>
      <Text style={styles.label}>Sua senha antiga</Text>
      <TextInput
        secureTextEntry={true}
        autoCapitalize="none"
        style={styles.input}
        value={oldPass}
        onChangeText={setOld}
      />
      <Text style={styles.label}>Sua nova antiga</Text>
      <TextInput
        secureTextEntry={true}
        autoCapitalize="none"
        style={styles.input}
        value={newPass}
        onChangeText={setNew}
      />
      <RectButton style={styles.button} onPress={handleChangePassword}>
        <Text style={styles.textButton}>Redefinir</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontFamily: "Nunito_600SemiBold",
    fontSize: 20, //
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginTop: 15,
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#096cff",
    height: 60,
    borderRadius: 5,
    marginVertical: 15,
    elevation: 5,
  },
  textButton: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Nunito_400Regular",
  },
});

export default ChangePassword;
