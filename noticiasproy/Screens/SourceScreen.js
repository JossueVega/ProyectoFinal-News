import React, { useContext } from 'react'; 
import {Dimensions, Image, StyleSheet,Text,TextInput,TouchableOpacity,View,} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { categories, sources } from '../API/api';
import { NewsContext } from '../API/Context';
import Search from '../components/Search';

const DiscoverScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  const SLIDE_WIDTH = Math.round(windowWidth / 3.5);

  const { setCategory, setSource, darkTheme } = useContext(NewsContext);

  return (
    <View style={styles.discover}>
     
     
     
      <Text
        style={{ ...styles.subtitle, color: darkTheme ? 'white' : 'black' }}>
        
      </Text>
      <View style={styles.sources}>
        {sources.map((s) => (
          <TouchableOpacity
            onPress={() => setSource(s.id)}
            key={s.id}
            style={styles.sourceContainer}>
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: '#007FFF',
    borderBottomWidth: 5,
    alignSelf: 'flex-start',
    borderRadius: 10,
  },
  
  sources: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 150,
    width: '40%',
    borderRadius: 10,
    margin: 15,
    backgroundColor: '#cc313d',
  },
  sourceImage: {
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
