import { View, Text, StyleSheet, Pressable } from "react-native";
import Colours from "../constants/Colours";

function PrimaryButton({ children, onPress }) {
  return (
    // To fix issue of anroid_ripple applying ripple outside the button, simply move <Pressable> to be inside <View>
    <View style={styles.buttonOuterContainer}>
      <Pressable
        //   Object destructure pressData to get pressed. Pass styles in an array if you want multiple styles applied.
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colours.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colours.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
