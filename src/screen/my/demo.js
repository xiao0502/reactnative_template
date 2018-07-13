import React, {Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import BaseComponent from '../../components/baseComponent'

export default class Demo extends BaseComponent {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View>
                <Text>demo</Text>
            </View>
        )
    }
}
