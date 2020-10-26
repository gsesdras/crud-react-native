import React, { useContext } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useAuth } from "../../contexts/auth";

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user, signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <RectButton style={styles.button} onPress={handleSignOut}>
        <Text style={styles.textButton}>Sair</Text>
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
