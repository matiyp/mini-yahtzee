import { useState } from "react";
import {Text, TextInput, View, Pressable, Keyboard, Alert, ScrollView, } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../style/Style";
import { NBR_OF_DICES, NBR_OF_THROWS, MIN_SPOT, MAX_SPOT, BONUS_POINTS_LIMIT, BONUS_POINTS, SCOREBOARD_KEY, } from "../constants/Game";

export default Home = ({ navigation }) => {
  const [playerName, setPlayerName] = useState("");
  const [hasPlayerName, setHasPlayerName] = useState(false);

  const handlePlayerName = (value) => {
    if (value.trim().length > 0) {
      setHasPlayerName(true);
      Keyboard.dismiss();
      console.log("Player name:", value);
    } else {
      Alert.alert("Player name is required!");
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.gameboard}>
        <MaterialCommunityIcons name="dice-multiple-outline" size={100} />
      </View>
      {!hasPlayerName ? (
        <>
          <TextInput
            style={[styles.gameinfo, { fontFamily: 'Frank' }]}
            value={playerName}
            onChangeText={setPlayerName}
            placeholder="Enter your name..."
            returnKeyType="done"
          />
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => handlePlayerName(playerName)}
            >
              <Text style={[styles.buttonText, { fontFamily:'Frank' }]}>OK</Text>
            </Pressable>
          </View>
        </>
      ) : (
        <ScrollView
        >
          <Text style={[styles.gameinfo, styles.gameinfoBold, { fontFamily:'Frank' }]}>
            Rules of the game
          </Text>
          <Text style={[styles.row, { fontFamily:'Frank' }]}>
            THE GAME: Upper section of the classic Yahtzee dice game. You have{" "}
            {NBR_OF_DICES} dices and for each dice, you have {NBR_OF_THROWS}{" "}
            throws. After each throw, you can keep dices to get as many of the
            same dice spot counts as possible. At the end of the turn, you must
            select your points from {MIN_SPOT} to {MAX_SPOT}. The game ends when
            all points have been selected. The order for selecting those is
            free.
          </Text>
          <Text style={[styles.row, { fontFamily:'Frank' }]}>
            POINTS: After each turn, the game calculates the sum of the dices
            you selected. Only the dices with the same spot count are
            calculated. You cannot select the same points from {MIN_SPOT} to{" "}
            {MAX_SPOT} again inside the game.
          </Text>
          <Text style={[styles.row, { fontFamily:'Frank' }]}>
            GOAL: To get as many points as possible. Reaching{" "}
            {BONUS_POINTS_LIMIT} points is the threshold for receiving a bonus
            of {BONUS_POINTS} points.
          </Text>
          <Text style={[styles.gameinfo, styles.gameinfoBold, { fontFamily:'Frank' }]}>
            Good luck {playerName}!
          </Text>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => navigation.navigate("Gameboard", { playerName })}
            >
              <Text style={[styles.buttonText, { fontFamily:'Frank' }]}>PLAY</Text>
            </Pressable>
          </View>
        </ScrollView>
      )}
      <Footer style={styles.author} />
    </View>
  );
};