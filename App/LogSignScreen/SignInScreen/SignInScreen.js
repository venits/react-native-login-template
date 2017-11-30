import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Form } from 'native-base';
import Email from '../InputComponents/Email';
import Password from '../InputComponents/Password';
import PasswordRepeat from '../InputComponents/PasswordRepeat';
import Name from '../InputComponents/Name';
import RegisterButton from './RegisterButton';
import GuestButton from '../GuestButton/GuestButton';

const hide = { from: { opacity: 0 }, to: { opacity: 0 } };

export default class SignInScreen extends Component {
  constructor() {
    super();
    this.state = {
      inputs: [],
      zIndex: 0,
    };
  }

  changeInputFocus = index => () => {
    if (index < 3) {
      this.state.inputs[index + 1].state.inputRef._root.focus(); // eslint-disable-line
      if (index >= 1) {
        this.props.scroll(index);
      }
    }
  };

  updateCanRegisterState = () => {
    const pass = this.state.inputs[2].state.value;
    const repeat = this.state.inputs[3].state.value;

    if (repeat !== pass) {
      if (repeat !== '') {
        this.state.inputs[3].state.isCorrect = 2;
        this.state.inputs[3].forceUpdate();
      }
    } else if (pass !== '') {
      this.state.inputs[3].state.isCorrect = 1;
      this.state.inputs[3].forceUpdate();
    }

    let canRegister = true;
    this.state.inputs.forEach((child) => {
      if (child.state.isCorrect !== 1) {
        canRegister = false;
      }
    });

    this.registerButton.updateCanRegister(
      canRegister,
      this.state.inputs[0].state.value, this.state.inputs[1].state.value,
      this.state.inputs[2].state.value, this.state.inputs[3].state.value,
    );
  };

  changeZindex() {
    if (this.state.zIndex === 0) {
      this.setState({ zIndex: 2 });
    } else {
      this.setState({ zIndex: 0 });
    }
  }

  clearAllInputs = () => {
    this.state.inputs.forEach(child => child.clearInput());
  };

  render() {
    return (
      <Animatable.View
        animation={hide}
        duration={0}
        ref={(ref) => { this.animationView = ref; }}
        style={{
          zIndex: this.state.zIndex, position: 'absolute', flex: 1, backgroundColor: 'transparent',
        }}
      >
        <Form style={GLOBAL.loginScreenStyle.form}>
          <Name
            changeFocus={this.changeInputFocus(0)}
            update={this.updateCanRegisterState}
            ref={(ref) => { this.state.inputs[0] = ref; }}
            shown={this.state.zIndex === 2}
          />
          <Email
            changeFocus={this.changeInputFocus(1)}
            update={this.updateCanRegisterState}
            special
            ref={(ref) => { this.state.inputs[1] = ref; }}
          />
          <Password
            changeFocus={this.changeInputFocus(2)}
            update={this.updateCanRegisterState}
            special
            ref={(ref) => { this.state.inputs[2] = ref; }}
          />
          <PasswordRepeat
            changeFocus={this.changeInputFocus(3)}
            update={this.updateCanRegisterState}
            ref={(ref) => { this.state.inputs[3] = ref; }}
          />
        </Form>
        <View style={{ marginTop: height / 25, alignItems: 'center' }}>
          <RegisterButton
            switch={this.props.switch}
            clear={this.clearAllInputs}
            ref={(ref) => { this.registerButton = ref; }}
          />
          <GuestButton move={this.props.move} />
        </View>
      </Animatable.View>
    );
  }
}

SignInScreen.propTypes = {
  scroll: PropTypes.func.isRequired,
  switch: PropTypes.func.isRequired,
  move: PropTypes.func.isRequired,
};
