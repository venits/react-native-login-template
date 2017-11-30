import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

const iconWidth = (width * 52) / 100;
const iconImage = require('../../assets/companylogo.png');

export default class MainAppScreen extends Component {
  moveToLogSignScreen = () => {
    Actions.pop();
  };

  render() {
    return (
      <View style={{
        backgroundColor: appMainColor, flex: 1, alignItems: 'center', justifyContent: 'center',
      }}
      >
        <Image
          source={iconImage}
          resizeMode="cover"
          style={{
            width: iconWidth,
            tintColor: mainThemeColor,
            marginTop: -height / 30,
            height: iconWidth * 0.86,
          }}
        />
        <Button
          onPress={this.moveToLogSignScreen}
          style={{
            backgroundColor: mainThemeColor, alignSelf: 'center', marginTop: height / 50, height: height / 14,
          }}
        >
          <Text
            uppercase={false}
            style={{ color: appMainColor, fontWeight: '600', fontSize: GLOBAL.totalSize(2.35) }}
          >{language.logOut}
          </Text>
        </Button>
      </View>
    );
  }
}
