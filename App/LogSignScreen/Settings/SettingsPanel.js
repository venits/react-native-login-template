import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity } from 'react-native';
import { Icon, CardItem, Text } from 'native-base';
import * as Animatable from 'react-native-animatable';

export default class SettingsPanel extends Component {
  constructor() {
    super();
    this.state = {
      isShown: false,
    };
  }

  showPanel = () => {
    if (this.state.isShown) {
      this.panelRef.bounceOutRight(1000).then(() => this.setState({ isShown: false }));
    } else {
      this.setState({ isShown: true });
    }
  };

  showPopupDialog = index => () => this.props.showPopup(index);

  render() {
    if (this.state.isShown) {
      const theme = appTheme === 'white' ? language.white : language.black;
      return (
        <Animatable.View
          animation="bounceInRight"
          duration={500}
          ref={(ref) => { this.panelRef = ref; }}
          style={{ position: 'absolute', marginTop: height / 24, alignSelf: 'flex-end' }}
        >
          <View style={{
            backgroundColor: mainThemeColor, borderWidth: 1, borderColor: mainUnderlineColor,
          }}
          >
            <TouchableOpacity activeOpacity={0.5} onPress={this.showPanel}>
              <CardItem style={GLOBAL.settingsStyle.rowUnderline}>
                <Icon name="ios-arrow-forward" style={GLOBAL.settingsStyle.backIconStyle} />
                <Text style={GLOBAL.settingsStyle.settingsText}>{language.settings}</Text>
                <Icon name="md-settings" style={GLOBAL.settingsStyle.iconStyle} />
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={this.showPopupDialog(0)}>
              <CardItem style={GLOBAL.settingsStyle.rowUnderline}>
                <Icon name="md-color-palette" style={GLOBAL.settingsStyle.iconStyle} />
                <Text style={GLOBAL.settingsStyle.normalText}>{language.mainColor}</Text>
                <Text style={GLOBAL.settingsStyle.clickText}>{language.change}</Text>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={this.showPopupDialog(1)}>
              <CardItem style={GLOBAL.settingsStyle.rowUnderline}>
                <Icon name="md-color-fill" style={GLOBAL.settingsStyle.iconStyle} />
                <Text style={GLOBAL.settingsStyle.normalText}>{language.mainTheme}</Text>
                <Text style={GLOBAL.settingsStyle.clickText}>{theme}</Text>
              </CardItem>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5} onPress={this.showPopupDialog(2)}>
              <CardItem style={GLOBAL.settingsStyle.rowUnderline}>
                <Icon name="md-globe" style={GLOBAL.settingsStyle.iconStyle} />
                <Text style={GLOBAL.settingsStyle.normalText}>{language.lan}</Text>
                <Text style={GLOBAL.settingsStyle.clickText}>{language.language}</Text>
              </CardItem>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      );
    }
    return (null);
  }
}

SettingsPanel.propTypes = {
  showPopup: PropTypes.func.isRequired,
};
