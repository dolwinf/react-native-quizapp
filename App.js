import { Text, View, Image } from "react-native";
import styles from "./App.styles";
import ImageOption from "./src/components/ImageOption";
export default function App() {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Which of these is a glass?</Text>
      <View style={styles.optionContainer}>
        <ImageOption
          source={{
            uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
          }}
          text={"Cup"}
        />
        <ImageOption
          source={{
            uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/glass.png",
          }}
          text={"Glass"}
        />
        <ImageOption
          source={{
            uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
          }}
          text={"Cup"}
        />
        <ImageOption
          source={{
            uri: "https://fsmd-assets.s3.eu-west-1.amazonaws.com/duolingo/images/cup.png",
          }}
          text={"Cup"}
        />
      </View>
    </View>
  );
}
