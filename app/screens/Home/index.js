import React from "react";
import styles from "./styles";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function Home() {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={"position"}
      enabled={true}
    >
      <View style={styles.flex}>
        <View style={styles.header}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Image
              style={[{ width: 270, height: 57, alignItems: "center" }]}
              source={require("../../../assets/images/inicio.png")}
            />
          </View>
          <Text style={styles.title}>Bienvenidos a estudio paranormal</Text>
          <Text style={styles.paragraph}>
            Hola, yo soy Adrián y con mi tio vamos a investigar las cosas
            paranormales.
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
