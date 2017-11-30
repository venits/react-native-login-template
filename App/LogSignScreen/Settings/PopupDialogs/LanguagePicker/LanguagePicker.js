import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { Button, Icon } from 'native-base';

let styles;
export default class LanguagePicker extends Component {
  constructor() {
    super();
    styles = StyleSheet.create({
      layout: {
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: mainReverseThemeColor,
        backgroundColor: mainThemeColor,
        height: height / 12,
        width: (width * 75) / 100,
        marginTop: height / 30,
      },
      checkBox: {
        color: mainReverseThemeColor,
        fontSize: GLOBAL.totalSize(4.7),
        backgroundColor: 'transparent',
        flex: 0,
        marginRight: 0,
      },
      text: {
        color: mainReverseThemeColor,
        fontSize: GLOBAL.totalSize(2.45),
        fontWeight: '500',
        paddingVertical: height / 100,
        paddingLeft: width / 24,
        backgroundColor: 'transparent',
        textAlign: 'left',
        flex: 2,
      },
      test: {
        color: mainThemeColor,
        fontSize: GLOBAL.totalSize(2.3),
        paddingHorizontal: width / 20,
        fontWeight: '500',
        backgroundColor: 'transparent',
      },
    });
  }

  changeLanguage = lan => () => {
    this.props.hide();
    if (language.language !== lan) {
      GLOBAL.AppGlobalConfig.changeLanguage(lan.toLowerCase());
    }
  };

  renderLanguages() {
    const arrayOfObjects = [];

    Object.keys(GLOBAL.appLanguages).forEach((key) => {
      const iconName = GLOBAL.currentLanguage === key ? 'ios-checkmark-circle-outline' : 'ios-close-circle-outline';
      const object = (
        <Button
          key={key}
          activeOpacity={0.8}
          rounded
          style={styles.layout}
          onPress={this.changeLanguage(GLOBAL.appLanguages[key].language)}
        >
          <Icon name={iconName} style={styles.checkBox} />
          <Text uppercase={false} style={styles.text}>{GLOBAL.appLanguages[key].language}</Text>
          <View style={{ flex: 2 }}>
            <Button
              activeOpacity={0.6}
              style={{ backgroundColor: appMainColor, height: height / 17 }}
              onPress={this.changeLanguage(GLOBAL.appLanguages[key].language)}
            >
              <Text uppercase={false} style={styles.test}>{GLOBAL.appLanguages[key].hello}</Text>
            </Button>
          </View>
        </Button>);

      if (iconName === 'ios-checkmark-circle-outline') {
        arrayOfObjects.unshift(object);
      } else {
        arrayOfObjects.push(object);
      }
    });
    return arrayOfObjects;
  }

  render() {
    const count = Object.keys(GLOBAL.appLanguages).length;
    const dialogHeight = ((height / 30) * (count + 1)) + ((height / 12) * count);
    return (
      <View style={{
        backgroundColor: mainThemeColor,
        borderRadius: height / 70,
        height: dialogHeight,
        borderWidth: 1,
        borderColor: mainReverseThemeColor,
        width: (width * 8) / 10,
      }}
      >
        <ScrollView>
          {this.renderLanguages()}
        </ScrollView>
      </View>
    );
  }
}

LanguagePicker.propTypes = {
  hide: PropTypes.func.isRequired,
};
