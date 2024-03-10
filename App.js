//Author: Matias Ylipekkala

import Home from './components/Home';
import Gameboard from './components/Gameboard';
import Scoreboard from './components/Sccoreboard';
import  { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();
const Tab = createBottomTabNavigator();

export default function App() {

const [fontsloaded, fontError] = useFonts({ 
    'Frank': require('./assets/fonts/Frank.ttf'),
   });

   useEffect(() => {
    async function handleSplashScreen() {
      if (fontsloaded || fontError) {
        await SplashScreen.hideAsync();
      }
    }
    handleSplashScreen();
   }, [fontsloaded, fontError]);

   if (!fontsloaded && !fontError) {
    return null;
  }

  return(
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={{ backgroundColor: 'transparent' }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'information'
                : 'information-outline';
            } else if (route.name === 'Gameboard') {
              iconName = focused 
                ? 'dice-multiple' 
                : 'dice-multiple-outline';
            } else if (route.name === 'Scoreboard') {
              iconName = focused 
                ? 'view-list' 
                : 'view-list-outline';
            }

            return <MaterialCommunityIcons
              name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#413C58',
          tabBarInactiveTintColor: '#A3C4BC',
          tabBarLabelStyle: { fontFamily: 'Frank', fontSize: 12},
        })}
      >
        <Tab.Screen name="Home" component={Home} 
          options={{tabBarStyle: {display: 'none'}}}
        />
        <Tab.Screen name="Gameboard" component={Gameboard} />
        <Tab.Screen name="Scoreboard" component={Scoreboard} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
