import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Icon, Input } from 'native-base';

export default class Password extends Component {
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
    let keyType = 'done';
    if (this.props.special) {
      keyType = 'next';
    }
    return (
      <Item style={{
        marginTop: this.props.special ? height / 70 : height / 40,
        width: (width * 7) / 10,
        borderBottomColor: mainThemeColor,
      }}
      >
        <Icon
          name="md-lock"
          style={{
            color: mainThemeColor, fontSize: GLOBAL.totalSize(2.61), marginLeft: width / 200,
          }}
        />
        <Input
          {...GLOBAL.inputTextStyle}
          blurOnSubmit={!this.props.special}
          returnKeyType={keyType}
          ref={(ref) => { this.state.inputRef = ref; }}
          autoCapitalize="none"
          placeholder={language.password}
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

Password.propTypes = {
  update: PropTypes.func.isRequired,
  changeFocus: PropTypes.func.isRequired,
  special: PropTypes.bool,
};

Password.defaultProps = {
  special: false,
};
