import React, { useContext } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import Context, { NewsContext } from "./API/Context";
import Tabs from "./components/Tabs";
import {NavigationContainer} from '@react-navigation/native';

function App() {
  const { darkTheme } = useContext(NewsContext);
    return (
      <NavigationContainer >
        <Tabs/>
      </NavigationContainer>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default () => {
  return (
    <Context>
      <App />
    </Context>
  );
};
