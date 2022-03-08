import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  FlatList,
} from 'react-native';
import {SvgUri} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';

export default function LandingPage({navigation}) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [searchedData, setSearchedData] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://developers-yiaai.talrop.com/api/v1/accounts/settings/countries/',
      )
      .then(function (response) {
        setCountries(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    let results = countries.filter(item => {
      return item.name.toLowerCase().includes(selectedCountry.toLowerCase());
    });
    console.log(results);
    setSearchedData(results);
  }, [selectedCountry]);

  const renderItem = ({item}) => (
    // <Item title={item.name} id={item.id} flag={item.flag} />
    <View style={styles.countryItem} key={item.id}>
      <View style={styles.imageBox}>
        <Image
          source={{uri: item.flag}}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <Text style={styles.countryTitle}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoImage}>
        <Image
          source={require('../../assets/images/user_pic.png')}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="search country"
          onChangeText={newText => setSelectedCountry(newText)}
        />
      </View>
      <View style={styles.countryView}>
        <FlatList
          data={selectedCountry ? searchedData : countries}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
  },
  logoImage: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 100,
    borderWidth: 2,
  },
  inputView: {
    width: 250,
    padding: 15,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  countryView: {
    width: 250,
    marginTop: 10,
    flex: 1,
  },
  imageBox: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginRight: 15,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
});
