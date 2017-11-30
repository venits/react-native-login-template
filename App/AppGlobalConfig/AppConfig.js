import { AsyncStorage, Dimensions } from 'react-native';
import Colors from './Colors/Colors';
import Language from './Language/Language';
import AppStyles from './Styles/Styles';

// default values for application
const defaultAppData = { l: 'english', t: 'white', c: '#42A5F5' };
//
const { height, width } = Dimensions.get('window');
GLOBAL.height = height;
GLOBAL.width = width;
GLOBAL.totalSize = num => (Math.sqrt((height * height) + (width * width)) * num) / 100;
// login style of application
// 0 - google only, 1 - facebook only, 2 - both
GLOBAL.appLoginStyle = 2;
// measures of some elements
companyBannerHeight = (height / 4) + (height / 19);
companyIconWidth = (width * 52) / 100;
topTabButtonHeight = height / 12;
GLOBAL.bodyHeight = height - companyBannerHeight - topTabButtonHeight;

class AppGlobalConfig {
     getAppData = async () => {
       try {
         const value = await AsyncStorage.getItem('appData');
         if (value !== null) {
           return JSON.parse(value);
         }
         return defaultAppData;
       } catch (error) {
         return defaultAppData;
       }
     };

    saveAppData = () => {
      const appDataToSave = {
        l: currentLanguage,
        t: appTheme,
        c: appMainColor,
      };
      AsyncStorage.setItem('appData', JSON.stringify(appDataToSave));
    };

    async init() {
      const appData = await this.getAppData();
      appTheme = appData.t;
      appMainColor = appData.c;
      currentLanguage = appData.l;
      Language.loadLanguage();
      language = appLanguages[currentLanguage];
      Colors.defineAppColors(appMainColor);
      Colors.defineAppTheme(appTheme);
      AppStyles.loadStyles();
    }

    changeAppMainColor = (newColor) => {
      appMainColor = newColor;
      Colors.defineAppColors(newColor);
      AppStyles.loadStyles();
      this.saveAppData();
      GLOBAL.resetAppWithNewColorOrTheme();
    };

    changeAppTheme = (theme) => {
      GLOBAL.appTheme = theme;
      Colors.defineAppTheme(theme);
      AppStyles.loadStyles();
      this.saveAppData();
      GLOBAL.resetAppWithNewColorOrTheme();
    };

    changeLanguage = (lan) => {
      currentLanguage = lan;
      language = appLanguages[currentLanguage];
      GLOBAL.resetAppWithNewColorOrTheme();
      this.saveAppData();
    }
}

export default new AppGlobalConfig();
