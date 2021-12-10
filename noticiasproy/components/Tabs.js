import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../API/Context";
import DiscoverScreen from "../Screens/DiscoverScreen";
import NewsScreen from "../Screens/NewsScreen";
import TopNavigation from "./TopNavigation-Copy";
import BottomTabNavigator1 from "../Screens/BottomTabNavigator1";
import CategoriesScreen from "../Screens/CategoriesScreen"; 
import SourceScreen from "../Screens/SourceScreen"; 
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function Tabs() {
  const layout = useWindowDimensions();

  const { index, setIndex ,setCategori} = useContext(NewsContext);


  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    
    first: BottomTabNavigator1,
    second: NewsScreen,
  });

  return (

    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex,setCategori}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
}
