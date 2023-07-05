import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import styles from "./styles";
import PropTypes from "prop-types";

const ImageOption = ({ source, text, isSelected, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.eachOptionCard,
        isSelected ? styles.selectedContainer : {},
      ]}
    >
      <Image
        source={{ uri: source }}
        style={styles.optionImage}
        resizeMode="contain"
      />
      <Text style={isSelected ? styles.selectedText : styles.optionText}>
        {text}
      </Text>
    </Pressable>
  );
};

ImageOption.propTypes = {
  source: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isSelected: PropTypes.bool,
};

ImageOption.defaultProps = {
  isSelected: false,
  text: "Object",
};

export default ImageOption;
