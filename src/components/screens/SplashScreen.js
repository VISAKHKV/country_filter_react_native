import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';

const SplashScreen = () => {
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
      <Text style={styles.appName}>Vishu's App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
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
  appName: {
    marginTop: 30,
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
