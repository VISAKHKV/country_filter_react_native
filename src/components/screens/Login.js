import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Login({navigation}) {
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
          placeholder="password"
          secureTextEntry={true}
          style={{
            fontSize: 20,
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Login;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'green',
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
    borderColor: 'blue',
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
    backgroundColor: 'yellow',
    color: ' #fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 25,
    color: '#000',
  },
});
