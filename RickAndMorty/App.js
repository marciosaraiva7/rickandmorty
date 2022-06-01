import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import { useColorScheme } from 'react-native';
import { Appearance } from 'react-native';

//pages
import HomeScreen from "./src/pages/home";
import Person from "./src/pages/person";

import themes from "./src/themes";

function App() {
  const Stack = createNativeStackNavigator();
  const deviceTheme = Appearance.getColorScheme();
  const themer = themes[deviceTheme] || themer.dark;

  return (
    <NavigationContainer>
      <ThemeProvider theme={themes[deviceTheme]}>
        <StatusBar animated={true} backgroundColor="transparent" />
        <Stack.Navigator screenOptions={{ presentation: "modal" }}>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: true,
              headerTransparent: true,
              headerBlurEffect: true,
            }}
          />
          <Stack.Screen
            name="Person"
            component={Person}
            options={{
              headerShown: false,
              mode: "modal",
              headerMode: "none",
            }}
          />
        </Stack.Navigator>
      </ThemeProvider>
    </NavigationContainer>
  );
}

export default App;
