import React, { Component } from 'react';
import { TriangleColorPicker, fromHsv } from 'react-native-color-picker';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button, Icon } from 'native-base';

export default class ColorPicker extends Component {
  setNewColor = () => {
    this.props.hide();
    if (appMainColor.toLowerCase() !== fromHsv(this.pickerRef.state.color).toLowerCase()) {
      GLOBAL.AppGlobalConfig.changeAppMainColor(fromHsv(this.pickerRef.state.color));
    }
  };

  updateButtonColor = (rgb) => {
    this.applyRef.setNativeProps({ style: { borderColor: fromHsv(rgb) } });
    this.cancelRef.setNativeProps({ style: { borderColor: fromHsv(rgb) } });
    this.noRef.setNativeProps({ style: { color: fromHsv(rgb) } });
    this.yesRef.setNativeProps({ style: { color: fromHsv(rgb) } });
  };

  dismissPicker = () => {
    this.props.hide();
  };

  render() {
    return (
      <View style={{
        backgroundColor: mainThemeColor,
        borderRadius: height / 70,
        borderWidth: 1,
        width: ((width * 8) / 10),
        height: height / 2,
        borderColor: mainReverseThemeColor,
      }}
      >
        <TriangleColorPicker
          ref={(ref) => { this.pickerRef = ref; }}
          onColorChange={this.updateButtonColor}
          defaultColor={appMainColor}
          style={{
            width: ((width * 8) / 10) - 2, height: ((width * 7) / 10) - 2,
          }}
        />
        <View style={{
          flexDirection: 'row',
          marginBottom: height / 50,
          marginTop: height / 50,
          justifyContent: 'center',
        }}
        >
          <Button
            onPress={this.dismissPicker}
            ref={(ref) => { this.cancelRef = ref; }}
            bordered
            style={{
              borderColor: appMainColor,
              borderWidth: 2,
              marginRight: width / 6,
              height: height / 14,
            }}
          >
            <Icon
              name="md-close"
              ref={(ref) => { this.noRef = ref; }}
              style={{ color: appMainColor, fontSize: GLOBAL.totalSize(5.22), backgroundColor: 'transparent' }}
            />
          </Button>
          <Button
            onPress={this.setNewColor}
            ref={(ref) => { this.applyRef = ref; }}
            bordered
            style={{ borderColor: appMainColor, borderWidth: 2, height: height / 14 }}
          >
            <Icon
              name="md-checkmark"
              ref={(ref) => { this.yesRef = ref; }}
              style={{ color: appMainColor, fontSize: GLOBAL.totalSize(5.22), backgroundColor: 'transparent' }}
            />
          </Button>
        </View>
      </View>
    );
  }
}

ColorPicker.propTypes = {
  hide: PropTypes.func.isRequired,
};
