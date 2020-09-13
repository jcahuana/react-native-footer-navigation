import React from "react";
import styles from "./styles";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function Events() {
  return (
    <KeyboardAvoidingView
      style={styles.flex}
      behavior={"position"}
      enabled={true}
    >
      <View style={styles.flex}>
        <View style={styles.header}>
          <Text style={styles.title}>Eventos</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
