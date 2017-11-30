import React, { Component } from 'react';
import { Button, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class GuestButton extends Component {
  onGuestButtonClick = () => {
    Actions.mainAppScreen();
  };

  render() {
    return (
      <Button
        activeOpacity={0.5}
        onPress={this.onGuestButtonClick}
        style={{
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: height / 34,
          marginBottom: height / 50,
          backgroundColor: mainThemeColor,
          width: (width * 13) / 20,
          height: height / 14,
        }}
      >
        <Text
          uppercase={false}
          style={{ color: appMainColor, fontWeight: '500', fontSize: GLOBAL.totalSize(2.22) }}
        >
          {language.guest}
        </Text>
      </Button>
    );
  }
}
