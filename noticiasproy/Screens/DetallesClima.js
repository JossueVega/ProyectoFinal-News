import React, { useContext, useEffect, useState}from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import DateTime2 from '../components/DateTime2'
import FutureForecast from '../components/FutureForecast'
import WeatherScroll from '../components/WeatherScroll'
const API_KEY ='ebd9e415ba968c2dd0b9c7059bb1dd32';

export default function DetallesClima() {
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
    <View style={styles.container}>
     
        <DateTime2 current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: '#f0ffff',       
  },
  image:{
    flex:1, 
    resizeMode:"cover", 
    justifyContent:"center"
  }
});