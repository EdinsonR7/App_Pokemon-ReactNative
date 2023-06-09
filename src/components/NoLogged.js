import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function NoLogged() {
  const navigation = useNavigation();

  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para acseder a favorios tienes que inicar sesión
      </Text>
      <Button
        title="Ir al login"
        onPress={() => navigation.navigate("Account1")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 40,
  },
  text: {
    textAlign: "center",
    marginBottom: 20,
  },
});
