import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { Button, Icon } from 'native-base';

let styles;
export default class ThemePicker extends Component {
  constructor() {
    super();
    styles = StyleSheet.create({
      // whiteTheme
      whiteThemeLayout: {
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: mainThemeColors[0][1],
        backgroundColor: mainThemeColors[0][0],
        height: height / 12,
        width: (width * 3) / 4,
        marginTop: height / 34,
      },
      whiteThemeCheckBox: {
        color: mainThemeColors[0][1],
        fontSize: GLOBAL.totalSize(4.7),
        backgroundColor: 'transparent',
        flex: 0,
        marginRight: 0,
      },
      whiteThemeText: {
        color: mainThemeColors[0][1],
        fontSize: GLOBAL.totalSize(2.45),
        fontWeight: '500',
        paddingVertical: height / 100,
        paddingLeft: width / 24,
        backgroundColor: 'transparent',
        textAlign: 'left',
        flex: 2,
      },
      whiteThemeTest: {
        color: mainThemeColors[0][0],
        fontSize: GLOBAL.totalSize(2.3),
        fontWeight: '500',
        paddingHorizontal: width / 20,
        backgroundColor: 'transparent',
      },
      // black theme
      blackThemeLayout: {
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: mainThemeColors[1][1],
        backgroundColor: mainThemeColors[1][0],
        height: height / 12,
        width: (width * 75) / 100,
        marginTop: height / 34,
      },
      blackThemeCheckBox: {
        color: mainThemeColors[1][1],
        fontSize: GLOBAL.totalSize(4.7),
        backgroundColor: 'transparent',
        flex: 0,
        marginRight: 0,
      },
      blackThemeText: {
        color: mainThemeColors[1][1],
        fontSize: GLOBAL.totalSize(2.45),
        fontWeight: '500',
        paddingVertical: height / 100,
        paddingLeft: width / 24,
        backgroundColor: 'transparent',
        textAlign: 'left',
        flex: 2,
      },
      blackThemeTest: {
        color: mainThemeColors[1][0],
        fontSize: GLOBAL.totalSize(2.3),
        fontWeight: '500',
        paddingHorizontal: width / 20,
        backgroundColor: 'transparent',
      },
    });
  }

  changeTheme = theme => () => {
    this.props.hide();
    if (theme !== GLOBAL.appTheme) {
      GLOBAL.AppGlobalConfig.changeAppTheme(theme);
    }
  };

  render() {
    const white = GLOBAL.appTheme === 'white' ? 'ios-checkmark-circle-outline' : 'ios-close-circle-outline';
    const black = GLOBAL.appTheme === 'black' ? 'ios-checkmark-circle-outline' : 'ios-close-circle-outline';

    return (
      <View style={{
        backgroundColor: mainThemeColor,
        borderRadius: height / 70,
        height: (height * 26) / 100,
        borderWidth: 1,
        borderColor: mainReverseThemeColor,
        width: (width * 8) / 10,
      }}
      >
        <Button
          activeOpacity={0.8}
          onPress={this.changeTheme('white')}
          rounded
          style={styles.whiteThemeLayout}
        >
          <Icon name={white} style={styles.whiteThemeCheckBox} />
          <Text uppercase={false} style={styles.whiteThemeText}>{language.white}</Text>
          <View style={{ flex: 2 }}>
            <Button
              activeOpacity={0.6}
              style={{ backgroundColor: appMainColor, height: height / 17 }}
              onPress={this.changeTheme('white')}
            >
              <Text uppercase={false} style={styles.whiteThemeTest}>{language.text}</Text>
            </Button>
          </View>
        </Button>
        <Button
          activeOpacity={0.8}
          onPress={this.changeTheme('black')}
          rounded
          style={styles.blackThemeLayout}
        >
          <Icon name={black} style={styles.blackThemeCheckBox} />
          <Text uppercase={false} style={styles.blackThemeText}>{language.black}</Text>
          <View style={{ flex: 2 }}>
            <Button
              activeOpacity={0.6}
              style={{ backgroundColor: appMainColor, height: height / 17 }}
              onPress={this.changeTheme('black')}
            >
              <Text uppercase={false} style={styles.blackThemeTest}>{language.text}</Text>
            </Button>
          </View>
        </Button>
      </View>);
  }
}

ThemePicker.propTypes = {
  hide: PropTypes.func.isRequired,
};
