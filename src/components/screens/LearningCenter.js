import React from 'react';
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
} from 'react-native';
import {SvgUri} from 'react-native-svg';

function LearningCenter() {
  return (
    <View style={styles.main}>
      <Text>Learning Center</Text>
    </View>
  );
}

export default LearningCenter;

const styles = StyleSheet.create({
  main: {
    padding: 20,
  },
});
