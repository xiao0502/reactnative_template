import React, {Component} from 'react'
import {
    View,
    Text,
    WebView
} from 'react-native'
import BaseComponet from '../../components/baseComponent'
import screen from '../../assets/js/screen'

export default class ListItem extends BaseComponet {
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {
            title: params.title
        }
    }
    render() {
        const {params} = this.props.navigation.state;
        console.log(params.html_url);
        return <WebView
            style={{height: screen.height, width: screen.width}}
            source={{uri: params.html_url}}
        />
    }
}
