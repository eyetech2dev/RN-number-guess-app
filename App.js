import { useState } from "react";
import { StyleSheet, View, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import Colours from "./constants/Colours";
// import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen />;
  }

  return (
    <View style={styles.rootScreen}>
      <SafeAreaView style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          {screen}
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // flex 1 because views only ever take minimal space needed to display content. Flex 1 forces it to take MAXIMUM space.
    flex: 1,
    backgroundColor: Colours.accent500,
  },
  backgroundImage: {
    opacity: 0.35,
  },
});
