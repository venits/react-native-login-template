# React Native Login Template


 More advanced React Native project demonstrating simple login screen with cool settings to **customize appearance of main screen.**

- [Preview](#preview)
- [Instalation](#installation)
- [Overview](#overview)
- [Managing Languages](#managing-languages)
- [Code Style](#code-style)
- [Support](#support)

## Preview

![Alt Text](https://raw.githubusercontent.com/venits/react-native-router-flux/master/photo1.png) 
![Alt Text](https://raw.githubusercontent.com/venits/react-native-router-flux/master/photo2.png) 

## Installation
1. Download or copy this repository.
2. Using terminal, go to project folder and run this command:

```javascript
npm install
```
3. Run it on iOS simulator using command:
```javascript
react-native run-ios
```
4. **That's all. Enjoy amazing login screen for your amazing application :)**

## Overview

Project is **not using any state management containers like Redux, Flux or MobX**, so feel free to implement your favourite one.

Project uses [react-native-router-flux](https://github.com/aksonov/react-native-router-flux) for navigation. **There are only 2 screens** so there is not much to navigate between.

**Feel free to implement your favourite navigation module.**

I created simple splash screen using [react-native-splash-screen](https://github.com/crazycodeboy/react-native-splash-screen) module, **if you want to make your own splash screen please take a look at this module.** Everything you need is described there.

## Managing Languages
You can add or remove languages that are available for user to choose.

**Please make pull requests with languages you manage to add to your application.**

**Together we can create solid data set of languages ;)**

#### Adding new language:
1. Go to this directory:
```javascript
/App/AppGlobalConfig/Language/Language.js
```
2. In Language.js you can easily see pattern:
```javascript
GLOBAL.appLanguages = {
    english: {
     // all values
    },
    polski: {
     // all values
    },
};
```
3. After adding new language it should look like this:
```javascript
GLOBAL.appLanguages = {
    english: {
     // all values
    },
    polski: {
     // all values
    },
    español: {
     // all values
    },
};
```
4. Example of translating values: (**You have to translate all values!**)
```javascript
GLOBAL.appLanguages = {
    english: {
     logOut: 'Logout',
     // other values
    },
    polski: {
     logOut: 'Wyloguj się',
     // other values
    },
};
```
5. After translating all values, restart app and test if everything works correctly.

## Code Style

I am using eslint.

Here is my **.eslintrc.js** config file:
```javascript
module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
       "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    }
};
```
## Support

If you need help or more customized version email me: tomasz.przybyl.it@gmail.com

License
----
MIT
