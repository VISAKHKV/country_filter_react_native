import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Signup({navigation}) {
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
          placeholder="usrename"
          style={{
            fontSize: 20,
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Signup;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 100,
    borderWidth: 2,
  },
  inputView: {
    borderWidth: 1,
    borderColor: 'purple',
    marginTop: 40,
    padding: 15,
    width: 300,
    borderRadius: 8,
  },
  nextButton: {
    borderRadius: 8,
    padding: 15,
    width: 300,
    marginTop: 30,
    backgroundColor: 'purple',
    color: ' #fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 25,
    color: '#fff',
  },
});
