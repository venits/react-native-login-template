import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Icon, Input } from 'native-base';

export default class PasswordRepeat extends Component {
  constructor() {
    super();
    this.state = {
      inputRef: null,
      value: '',
      isCorrect: 0,
    };
  }

  checkIfIsCorrect = () => {
    if (this.state.value !== '') {
      this.state.isCorrect = 1;
    } else {
      this.state.isCorrect = 2;
    }
    this.setState(this.state);
    this.props.update();
  };

  clearInput = () => {
    this.state.inputRef._root.setNativeProps({ text: '' }); // eslint-disable-line
    this.setState({ isCorrect: 0, value: '' });
  };

  updateText = (value) => {
    this.state.value = value;
  };

  render() {
    return (
      <Item style={{
        marginTop: height / 70, width: (width * 7) / 10, borderBottomColor: mainThemeColor,
      }}
      >
        <Icon
          name="ios-lock"
          style={{
            color: mainThemeColor, fontSize: GLOBAL.totalSize(2.61), marginLeft: width / 200,
          }}
        />
        <Input
          {...GLOBAL.inputTextStyle}
          blurOnSubmit
          returnKeyType="done"
          ref={(ref) => { this.state.inputRef = ref; }}
          autoCapitalize="none"
          placeholder={language.repeat}
          onSubmitEditing={this.props.changeFocus}
          secureTextEntry
          onChangeText={this.updateText}
          onEndEditing={this.checkIfIsCorrect}
        />
        {GLOBAL.checkMarksArray[this.state.isCorrect]}
      </Item>
    );
  }
}

PasswordRepeat.propTypes = {
  update: PropTypes.func.isRequired,
  changeFocus: PropTypes.func.isRequired,
};

