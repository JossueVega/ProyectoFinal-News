import { StatusBar } from 'expo-status-bar';
import React, {createContext, useEffect, useState}from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import DateTime from '../components/DateTime'
import WeatherScroll from '../components/WeatherScroll'
const API_KEY ='ebd9e415ba968c2dd0b9c7059bb1dd32';

export const Newsclima = createContext();
const Clima=({ children }) => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {

      // console.log(data)
      setData(data)
      })
    }
    
  }

  return (
    <Newsclima.Provider
      value={{
        data,
        fetchDataFromApi,
      }}
    >
      {children}
    </Newsclima.Provider>
  );
};
export default Clima;