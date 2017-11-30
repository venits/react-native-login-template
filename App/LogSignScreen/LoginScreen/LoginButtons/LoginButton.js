import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';
import { Text, Spinner, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class LoginButton extends Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
      canLogin: false,
    };
  }

  updateCanLogin(can) {
    this.setState({ canLogin: can });
  }

  moveToMainAppScreen = () => {
    Actions.push('mainAppScreen');
  };

  loginUser = () => {
    if (!this.state.isLogin) {
      if (!this.state.canLogin) {
        GLOBAL.showToast(language.checkFields);
      } else {
        this.setState({ isLogin: true });
        setTimeout(() => {
          GLOBAL.showToast(language.loginSuccess);
          this.moveToMainAppScreen();
          this.props.clear();
          this.setState({ isLogin: false, canLogin: false });
        }, 1000);
      }
    }
  };

  render() {
    let animationType;
    let loginColor;

    if (this.state.canLogin) {
      animationType = 'pulse';
      loginColor = mainThemeColor;
    } else {
      loginColor = mainThemeColor;
      animationType = null;
    }

    let indicator = (<Text uppercase={false} style={{ color: loginColor, fontWeight: '500', fontSize: GLOBAL.totalSize(2.22) }}>{language.login}</Text>);
    if (this.state.isLogin) {
      indicator = (<Spinner color={loginColor} size="large" />);
    }

    return (
      <Animatable.View animation={animationType} iterationCount="infinite" duration={500}>
        <Button
          bordered
          rounded
          activeOpacity={0.5}
          onPress={this.loginUser}
          style={{
            borderColor: loginColor, alignSelf: 'center', justifyContent: 'center', width: (width * 13) / 20, height: height / 14,
          }}
        >
          {indicator}
        </Button>
      </Animatable.View>
    );
  }
}

LoginButton.propTypes = {
  clear: PropTypes.func.isRequired,
};
