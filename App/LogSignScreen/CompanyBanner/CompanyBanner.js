import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native-animatable';

const bannerImage = require('../../../assets/companybanner.jpg');
const comapnyLogo = require('../../../assets/companylogo.png');

export default class CompanyBanner extends Component {
  constructor() {
    super();
    this.state = {
      gradient: [`${appMainColor}DC`, `${gradient1}DD`],
    };
  }

  render() {
    return (
      <View animation="fadeInRight" delay={250} duration={700}>
        <ImageBackground
          source={bannerImage}
          style={companyBannerStyle.background}
        >
          <LinearGradient colors={this.state.gradient} style={companyBannerStyle.background} />
          <Image source={comapnyLogo} resizeMode="contain" style={companyBannerStyle.icon} />
        </ImageBackground>
      </View>
    );
  }
}
