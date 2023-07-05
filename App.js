import { useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";
import question from "./assets/data/oneQuestionWithOption";
import Button from "./src/components/Button/Button";

const App = () => {
  const [selected, setSelected] = useState(null);

  const onButtonPress = () => {
    console.warn("Pressed");
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{question.question}</Text>
      <View style={styles.optionContainer}>
        {question.options.map((option) => (
          <ImageOption
            key={option.id}
            source={option.image}
            text={option.text}
            isSelected={option.id === selected?.id}
            onPress={() => setSelected(option)}
          />
        ))}
      </View>
      <Button text="Check" onPress={onButtonPress} disabled={!selected} />
    </View>
  );
};

export default App;
