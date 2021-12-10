import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../API/Context";
import DiscoverScreen from "../Screens/DiscoverScreen";
import CategoriesScreen from "../Screens/CategoriesScreen"; 
import SourceScreen from "../Screens/SourceScreen"; 
import Ionicons from 'react-native-vector-icons/Ionicons'
import NewsScreen from "../Screens/NewsScreen";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Pronostico from "../Screens/Pronostico"; 
import ClimaScreen from "../Screens/ClimaScreen"; 
import ContactScreen from "../Screens/ContactScreen";
import DetallesClima from "../Screens/DetallesClima";
import TopTapNavigator1 from "../Screens/TopTabNavigator1";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator1(){
    return(
      
        <Tab.Navigator
            initialRouteName="Settings"
            tabBarOptions={{
                activeTintColor:"#007FFF",
                inactiveTintColor:"#010101",
                showLabel:true,
                labelStyle:{
                    fontSize:12
                },
                style:{
                    paddingBottom:5,
                    backgroundColor:"#f3f3f1"
                }

            }}
        > 
           
            <Tab.Screen
                name="Home"
                component={DiscoverScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"home-outline"} size={20} color={color}/>
                    )
                }}
            
            />
            <Tab.Screen
                name="Categories"
                component={CategoriesScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"menu"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Source"
                component={SourceScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"options"} size={20} color={color}/>
                    )
                }}
            />
            <Tab.Screen
                name="Climate"
                component={Pronostico}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"rainy"} size={20} color={color}/>
                    )
                }}
            />
             <Tab.Screen
                name="Forecast"
                component={ClimaScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"cloudy-night"} size={20} color={color}/>
                    )
                }}
            />       
             <Tab.Screen
                name="Weather-Details"
                component={DetallesClima}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"sunny"} size={20} color={color}/>
                    )
                }}
            /> 
             <Tab.Screen
                name="Contact"
                component={TopTapNavigator1}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle"} size={20} color={color}/>
                    )
                }}
            /> 
          
        </Tab.Navigator>
    )
}
