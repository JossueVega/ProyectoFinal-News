import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../API/Context";

import Ionicons from 'react-native-vector-icons/Ionicons'

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Progr1 from "../Screens/Progr1";  
import Progr2 from "../Screens/Progr2"; 


const Tab = createMaterialTopTabNavigator();

export default function TopTabNavigator1(){
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
                name="Contact1"
                component={Progr2}
                options={{
                    tabBarLabel:"Programmer 1",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle"} size={20} color={color}/>
                    )
                }}
            /> 
             <Tab.Screen
                name="Contact2"
                component={Progr1}
                options={{
                    tabBarLabel:"Programmer 2",
                    tabBarIcon:({color})=>(
                        <Ionicons name={"person-circle"} size={20} color={color}/>
                    )
                }}
            /> 
          
        </Tab.Navigator>
    )
}
