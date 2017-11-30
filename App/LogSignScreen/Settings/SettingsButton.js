import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default class SettingsButton extends Component { // eslint-disable-line
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.show}
        style={{
          alignSelf: 'flex-end', position: 'absolute', marginTop: height / 24, paddingRight: width / 50,
        }}
      >
        <Icon
          name="md-settings"
          style={{
          color: mainThemeColor, fontSize: GLOBAL.totalSize(6.5), backgroundColor: 'transparent',
        }}
        />
      </TouchableOpacity>
    );
  }
}

SettingsButton.propTypes = {
  show: PropTypes.func.isRequired,
};
