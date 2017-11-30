import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Icon, Input } from 'native-base';

export default class Email extends Component {
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
      <Item
        style={{
          marginTop: this.props.special ? height / 70 : 0,
          width: (width * 7) / 10,
          height: height / 13,
          borderBottomColor: mainThemeColor,
        }}
      >
        <Icon
          name="md-mail"
          style={{
            color: mainThemeColor, fontSize: GLOBAL.totalSize(2.61), marginLeft: -width / 400,
          }}
        />
        <Input
          {...GLOBAL.inputTextStyle}
          blurOnSubmit={false}
          returnKeyType="next"
          ref={(ref) => { this.state.inputRef = ref; }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder={language.email}
          onSubmitEditing={this.props.changeFocus}
          onChangeText={this.updateText}
          onEndEditing={this.checkIfIsCorrect}
        />
        {GLOBAL.checkMarksArray[this.state.isCorrect]}
      </Item>
    );
  }
}

Email.propTypes = {
  update: PropTypes.func.isRequired,
  changeFocus: PropTypes.func.isRequired,
  special: PropTypes.bool,
};

Email.defaultProps = {
  special: false,
};
