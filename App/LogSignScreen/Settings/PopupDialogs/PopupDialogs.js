import React, { Component } from 'react';
import { TouchableOpacity, BackHandler } from 'react-native';
import LanguagePicker from './LanguagePicker/LanguagePicker';
import ThemePicker from './ThemePicker/ThemePicker';
import ColorPicker from './ColorPicker/ColorPicker';

let context;
const backAndroidFunc = () => {
  context.dismissPopup();
  return true;
};

export default class PopupDialogs extends Component {
  constructor() {
    super();
    context = this;
    this.state = {
      isShown: false,
      dialogIndex: -1,
    };
  }

  showPopup = (index) => {
    this.setState({ isShown: true, dialogIndex: index });
    BackHandler.addEventListener('hardwareBackPress', backAndroidFunc);
  };

  dismissPopup = () => {
    this.setState({ isShown: false, dialogIndex: -1 });
    BackHandler.removeEventListener('hardwareBackPress', backAndroidFunc);
  };

  returnPopupDialog = () => {
    if (this.state.dialogIndex === 2) {
      return (<LanguagePicker hide={this.dismissPopup} />);
    } else if (this.state.dialogIndex === 1) {
      return (<ThemePicker hide={this.dismissPopup} />);
    } else if (this.state.dialogIndex === 0) {
      return (<ColorPicker hide={this.dismissPopup} />);
    }
    return (null);
  };

  render() {
    if (this.state.isShown) {
      return (
        <TouchableOpacity
          activeOpacity={1}
          style={{
            position: 'absolute', width, height, backgroundColor: '#00000070', alignItems: 'center', justifyContent: 'center',
          }}
          onPress={this.dismissPopup}
        >
          <TouchableOpacity activeOpacity={1}>
            {this.returnPopupDialog()}
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }
    return (null);
  }
}
