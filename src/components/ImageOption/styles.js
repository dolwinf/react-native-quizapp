import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  //Border for option card component
  eachOptionCard: {
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    borderRadius: 10,
    width: "48%",
    height: "48%",
    alignItems: "center",
  },

  optionImage: {
    width: 100,
    flex: 1,
  },
  optionText: {},

  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },

  selectedText: {
    color: "#40BEF7",
    fontWeight: "bold",
  },
});
