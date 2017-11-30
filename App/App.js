import React, { Component } from 'react';
import { View, StatusBar, Platform, BackHandler } from 'react-native';
import { Router, Scene, Actions } from 'react-native-router-flux';
import Toast, { DURATION } from 'react-native-easy-toast';
import SplashScreen from 'react-native-splash-screen';
import AppGlobalConfig from './AppGlobalConfig/AppConfig';
import LogSignScreen from './LogSignScreen/LogSignScreen';
import MainAppScreen from './MainAppScreen/MainAppScreen';

let context;

GLOBAL.showToast = (message) => {
  context.toast.show(message, DURATION.LENGTH_LONG);
};

GLOBAL.resetAppWithNewColorOrTheme = () => {
  context.setState(context.state);
};

export default class App extends Component {
  constructor() {
    super();
    context = this;
    this.state = {
      initLoaded: false,
    };
    GLOBAL.AppGlobalConfig = AppGlobalConfig;
    AppGlobalConfig.init().finally(() => {
      SplashScreen.hide();
      this.setState({
        initLoaded: true,
      });
    });
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      StatusBar.setTranslucent(true);
      StatusBar.setBackgroundColor('transparent');
    }
  }
  onBackPressed = () => {
    if (Actions.currentScene === 'logSignScreen') {
      BackHandler.exitApp();
      return false;
    }
    Actions.pop();
    return true;
  };

  render() {
    if (this.state.initLoaded) {
      return (
        <View style={{ flex: 1, backgroundColor: appMainColor }}>
          <Router backAndroidHandler={this.onBackPressed} style={{ backgroundColor: appMainColor }}>
            <Scene key="root">
              <Scene
                key="logSignScreen"
                component={LogSignScreen}
                hideNavBar
                initial
              />
              <Scene
                key="mainAppScreen"
                component={MainAppScreen}
                hideNavBar
              />
            </Scene>
          </Router>
          <Toast
            positionValue={height / 8}
            style={{ backgroundColor: mainReverseThemeColor }}
            textStyle={{ fontSize: GLOBAL.totalSize(2.34), color: mainThemeColor, fontWeight: '400' }}
            ref={(ref) => { context.toast = ref; }}
          />
        </View>
      );
    }
    return (null);
  }
}

