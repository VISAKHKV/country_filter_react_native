import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
  PlatformColor,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {SvgUri} from 'react-native-svg';

function Header() {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <SvgUri
          width="100"
          height="50"
          uri="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/taid/03-02-2022/images/taid_logo.svg"
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <SvgUri
          width="35"
          height="30"
          uri="https://s3.ap-south-1.amazonaws.com/talrop.com-react-assets-bucket/taid/03-02-2022/images/menu_icon.svg"
        />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  header: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
  },
});
