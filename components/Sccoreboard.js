import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, ScrollView, Pressable, DeviceEventEmitter } from "react-native";
import Header from "./Header";
import Footer from "./Footer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "../style/Style";
import { useEffect, useState } from "react";
import { SCOREBOARD_KEY, MAX_NBR_OF_SCOREBOARD_ROWS } from "../constants/Game";

export default Scoreboard = () => {
  const [scores, setScores] = useState([]);

  // Get data from storage
  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem(SCOREBOARD_KEY);
        if (jsonValue !== null) {
          let tmpScores = JSON.parse(jsonValue);
          tmpScores.sort((a, b) => b.sum - a.sum);

          tmpScores = tmpScores.slice(0, MAX_NBR_OF_SCOREBOARD_ROWS);
          setScores(tmpScores);
        }
      } catch (error) {
        console.error("Failed to fetch scores", error);
      }
    };

    getData();
    // Listen for scoreboard updates
    const subscription = DeviceEventEmitter.addListener('scoreboardUpdated', getData);
    return () => subscription.remove();
  }, []);

  // Clear scoreboard data from storage
  const resetScoreboard = async () => {
    try {
      await AsyncStorage.removeItem(SCOREBOARD_KEY); 
      setScores([]);
    } catch (error) {
      console.error("Error resetting the scoreboard:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ marginTop: 20 }}>
        <Header />
        <View style={styles.gameboard}>
          <MaterialCommunityIcons
            name="podium"
            size={100}
          ></MaterialCommunityIcons>
        </View>
        <Text style={[styles.gameinfo, styles.gameinfoBold, styles.customFont]}>TOP 10 PLAYERS</Text>
        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={resetScoreboard}>
            <Text style={[styles.buttonText, styles.customFont]}>Reset Scoreboard</Text>
          </Pressable>
        </View>
        {scores.map((score, index) => (
          <View key={index} style={[styles.row, { borderBottomWidth: 1 }]}>
            <Text style={[styles.gameinfoBold, styles.customFont]}>Player: {score.playerName}</Text>
            <Text style={[styles.gameinfoBold, styles.customFont]}>
              Date: {score.date}, Time: {score.time}
            </Text>
            <Text style={[styles.gameinfoBold, styles.customFont]}>Total Score: {score.sum}</Text>
          </View>
        ))}
        <Footer />
      </ScrollView>
    </View>
  );
};