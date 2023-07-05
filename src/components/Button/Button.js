import React from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./styles";

const Button = ({ text, onPress, disabled }) => {
  return (
    <Pressable
      style={[styles.container, , disabled ? styles.disabledButton : {}]}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.textViewWrapper}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Pressable>
  );
};

export default Button;
