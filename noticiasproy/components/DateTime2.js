import React, {useContext, useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment-timezone'
import {Newsclima } from '../API/Clima';

const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

const WeatherItem = ({title, value, unit}) => {
    return(
        <View style={styles.weatherItem}>
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={styles.weatherItemTitle}>{value}{unit}</Text>
        </View>
    )
}

const DateTime2 = ({current, lat, lon, timezone}) => {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    useEffect (() => {
        setInterval(() => {
            const time = new Date();
            const month = time.getMonth();
            const date = time.getDate();
            const day = time.getDay();
            const hour = time.getHours();
            const hoursIn12HrFormat = hour >= 13 ? hour %12: hour
            const minutes = time.getMinutes();
            const ampm = hour >=12 ? 'pm' : 'am'
        
           
        
        }, 1000);
    }, [])
    return (
        <View style={styles.container}>  
           
               
               
               <View style={styles.weatherItemContainer}>
                    <WeatherItem title="Humidity:" value={current? current.humidity : ""} unit="%"/>
                    <WeatherItem title="Pressure:" value={current? current.pressure : ""} unit="hPA"/>
                    <WeatherItem title="Sunrise:" value={current? moment.tz(current.sunrise * 1000, timezone ).format('HH:mm'): ""} unit="am"/>
                    <WeatherItem title="Sunset:" value={current? moment.tz(current.sunset * 1000, timezone ).format('HH:mm') : ""} unit="pm"/>
               </View>
           
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1.5,
        flexDirection:"row",
        justifyContent:'center',
        padding: 15
    },
   
    weatherItemContainer: {
        backgroundColor: '#00000033',
        justifyContent: 'space-around',
        borderRadius: 10,
        padding: 40,
        
        marginTop: 10
    }, 
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    weatherItemTitle: {
        color:'black',
        fontSize: 30,
        fontWeight: '200'
    }
})

export default DateTime2