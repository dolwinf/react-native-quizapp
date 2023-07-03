import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    //use the whole width and align text to the left
    alignSelf: "stretch",
  },

  optionContainer: {
    width: "100%",
    flex: 1,
    padding: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "space-between",
    flexWrap: "wrap",
  },
});
