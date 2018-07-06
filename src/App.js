/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import RootStack from './navigation/'
import {
    Text
} from 'react-native'
// import SplashScreen from 'react-native-splash-screen'
import { _ } from 'lodash'

console.disableYellowBox = true;
console.warn('YellowBox is disabled.');
// import CodePush from "react-native-code-push";

export default class App extends Component {
    componentDidMount() {
        // setTimeout(() => {
        //     SplashScreen.hide();
        // }, 1500)
        // CodePush.sync({
        //     updateDialog: {
        //         mandatoryContinueButtonLabel: '更新',
        //         mandatoryUpdateMessage: '有新版本了，请您及时更新',
        //         optionalIgnoreButtonLabel: '稍后',
        //         optionalInstallButtonLabel: '后台更新',
        //         optionalUpdateMessage: '有新版本了，是否更新？',
        //         title: '更新提示'
        //     },
        //     installMode: CodePush.InstallMode.IMMEDIATE
        // });


    }

    render() {
        return (
            <RootStack/>
        );
    }
}

// let codePushOptions = {checkFrequency: CodePush.CheckFrequency.MANUAL};
// App = CodePush(codePushOptions)(App);

Text.prototype.render = _.wrap(Text.prototype.render, function (func, ...args) {
    let originText = func.apply(this, args);
    originText.props.allowFontScaling = false;
    return React.cloneElement(originText, {allowFontScaling: false});
});
