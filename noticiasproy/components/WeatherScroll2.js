import React from 'react'
import {View, ScrollView, Image, Text, StyleSheet} from 'react-native'
import moment from 'moment-timezone'
import FutureForecast from './FutureForecast'
import {Newsclima } from '../API/Clima';

const WeatherScroll2 = ({weatherData}) => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            <CurrentTempEl data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
            <FutureForecast data={weatherData}/>
        </ScrollView>
    )
}

const CurrentTempEl = ({data}) => {

    if(data && data.weather){
        const img = {uri: 'http://openweathermap.org/img/wn/'+ data.weather[0].icon +'@4x.png'}
        return(
            <View style={styles.currentTempContainer}>
                <Image source={img} style={styles.image} />
                <View  style={styles.otherContainer}>
                    <Text  style={styles.day}>{moment(data.dt * 1000).format('dddd')}</Text>
                    <Text  style={styles.temp}>Noche - {data.temp.night}&#176;C</Text>
                    <Text  style={styles.temp}>DIa - {data.temp.day}&#176;C</Text>
                </View>
            </View>
        )
    }else{
        return( 
            <View>

            </View>

        )       
    }   
}

const styles = StyleSheet.create({
    scrollView: {
        flex:0.4,
        backgroundColor: '#f0ffff',
        justifyContent:"center",
        padding:40
    },
    image: {
        width: 150,
        height: 150
    },
    currentTempContainer: {
        flexDirection: 'row',
        backgroundColor: '#00000033',
        justifyContent:"center",
        alignItems:'center',
        borderRadius: 10,
        borderColor:'#eee',
        borderWidth:1,
        padding: 7
    },
    day: {
        fontSize: 20,
        color:"Black",
        backgroundColor: "#f0ffff",
        padding: 10,
        textAlign:"center",
        borderRadius: 45,
        fontWeight: "200",
        marginBottom: 14
    },
    temp: {
        fontSize: 16,
        color:"Black",
        fontWeight:"100",
        textAlign:"center"
    },
    otherContainer: {
        paddingRight: 20
    }
})

export default WeatherScroll2