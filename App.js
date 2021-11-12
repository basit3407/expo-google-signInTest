import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
import * as GoogleSignIn from "expo-google-sign-in";

export default function App() {
  const [googleToken, setGoogleToken] = React.useState();

  const token = googleToken || "null";

  const handlePress = async () => {
    await GoogleSignIn.initAsync();

    const { user } = await GoogleSignIn.signInAsync();
    const googleToken = user.auth.idToken;
    setGoogleToken(googleToken);
  };

  return (
    <View style={styles.container}>
      <Button
        style={styles.button}
        title="Google SignIn"
        onPress={handlePress}
      />
      <Text>token = {token}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "50%",
  },
});
