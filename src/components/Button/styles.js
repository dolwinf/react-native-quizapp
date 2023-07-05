import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#58CC02",
    height: 50,
    //reactvie native specific - add space around the button, has same effect as marginBotton and marginTop
    marginVertical: 10,
    //use all available horizontal space
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderBottomWidth: 5,
    borderColor: "#57A600",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  textViewWrapper: {
    borderColor: "white",
    borderBottomWidth: 1.5,
  },
  disabledButton: {
    backgroundColor: "grey",
    borderColor: "lightgrey",
  },
});

export default styles;
