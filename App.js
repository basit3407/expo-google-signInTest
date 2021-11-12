import React from "react";
import { StyleSheet, Button } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";

export default function App() {
  const handlePress = async () => {
    await GoogleSignIn.initAsync();

    const { user } = await GoogleSignIn.signInAsync();
    console.log("user in google = ", user); // ----> user.auth.token is null
    const token = user?.auth?.idToken; //---->null
    console.log("token in google = ", token);
  };

  return <Button title="Google SignIn" onPress={handlePress} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
