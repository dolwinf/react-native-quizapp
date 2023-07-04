import React from "react";
import { View, Image, Text } from "react-native";
import styles from "./styles";

const ImageOption = ({ source, text }) => {
  return (
    <View style={styles.eachOptionCard}>
      <Image
        source={{ uri: source }}
        style={styles.optionImage}
        resizeMode="contain"
      />
      <Text style={styles.optionText}>{text}</Text>
    </View>
  );
};

export default ImageOption;
