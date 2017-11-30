import React, { Component } from 'react';
import { View } from 'react-native-animatable';
import { Text, Spinner, Button } from 'native-base';
import PropTypes from 'prop-types';

export default class RegisterButton extends Component {
  constructor() {
    super();
    this.state = {
      isRegistering: false,
      canRegister: false,
    };
  }

  updateCanRegister = (can) => {
    this.setState({ canRegister: can });
  };

  registerUser = () => {
    if (!this.state.isRegistering) {
      if (!this.state.canRegister) {
        GLOBAL.showToast(language.checkFields);
      } else {
        this.setState({ isRegistering: true });
        setTimeout(() => {
          GLOBAL.showToast(language.accountCreated);
          this.props.switch(0);
          this.props.clear();
          this.setState({ isRegistering: false, canRegister: false });
        }, 1000);
      }
    }
  };

  render() {
    let animationType;
    let registerColor;

    if (this.state.canRegister) {
      animationType = 'pulse';
      registerColor = mainThemeColor;
    } else {
      registerColor = mainThemeColor;
      animationType = null;
    }

    let indicator = (<Text uppercase={false} style={{ color: registerColor, fontWeight: '500', fontSize: GLOBAL.totalSize(2.22) }}>{language.create}</Text>);
    if (this.state.isRegistering) {
      indicator = (<Spinner color={registerColor} size="large" />);
    }

    return (
      <View animation={animationType} iterationCount="infinite" duration={500}>
        <Button
          bordered
          rounded
          activeOpacity={0.5}
          onPress={this.registerUser}
          style={{
            borderColor: registerColor, alignSelf: 'center', justifyContent: 'center', width: (width * 13) / 20, height: height / 14,
          }}
        >
          {indicator}
        </Button>
      </View>
    );
  }
}

RegisterButton.propTypes = {
  switch: PropTypes.func.isRequired,
  clear: PropTypes.func.isRequired,
};
