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
import SplashScreen from 'react-native-splash-screen'
import RootStore from './store'
import {observer,Provider} from 'mobx-react'
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
@observer
export default class App extends Component {
    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1500)
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
            <Provider rootStore={RootStore}>
                <RootStack/>
            </Provider>
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

let storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: 1000 * 3600 * 24,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync方法，无缝返回最新数据。
    // sync方法的具体说明会在后文提到
    // 你可以在构造函数这里就写好sync的方法
    // 或是在任何时候，直接对storage.sync进行赋值修改
    // 或是写到另一个文件里，这里require引入
    // sync: require('你可以另外写一个文件专门处理sync')

})

global = Object.assign(global, {
    $storage: storage,
});


