import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableWithoutFeedback
} from 'react-native'
import BaseComponent from '../../components/baseComponent'
import * as Animatable from 'react-native-animatable';

export default class Animation extends BaseComponent {
    static navigationOptions = ({}) => {
        return {
            title: '动画'
        }
    }

    constructor(props) {
        super(props);
        this.state = {};

    }

    // 动画种类
    // 'bounce' |
    // 'flash' |
    // 'jello' |
    // 'pulse' |
    // 'rotate' |
    // 'rubberBand' |
    // 'shake' |
    // 'swing' |
    // 'tada' |
    // 'wobble' |
    // 'bounceIn' |
    // 'bounceInDown' |
    // 'bounceInUp' |
    // 'bounceInLeft' |
    // 'bounceInRight' |
    // 'bounceOut' |
    // 'bounceOutDown' |
    // 'bounceOutUp' |
    // 'bounceOutLeft' |
    // 'bounceOutRight' |
    // 'fadeIn' |
    // 'fadeInDown' |
    // 'fadeInDownBig' |
    // 'fadeInUp' |
    // 'fadeInUpBig' |
    // 'fadeInLeft' |
    // 'fadeInLeftBig' |
    // 'fadeInRight' |
    // 'fadeInRightBig' |
    // 'fadeOut' |
    // 'fadeOutDown' |
    // 'fadeOutDownBig' |
    // 'fadeOutUp' |
    // 'fadeOutUpBig' |
    // 'fadeOutLeft' |
    // 'fadeOutLeftBig' |
    // 'fadeOutRight' |
    // 'fadeOutRightBig' |
    // 'flipInX' |
    // 'flipInY' |
    // 'flipOutX' |
    // 'flipOutY' |
    // 'lightSpeedIn' |
    // 'lightSpeedOut' |
    // 'slideInDown' |
    // 'slideInUp' |
    // 'slideInLeft' |
    // 'slideInRight' |
    // 'slideOutDown' |
    // 'slideOutUp' |
    // 'slideOutLeft' |
    // 'slideOutRight' |
    // 'zoomIn' |
    // 'zoomInDown' |
    // 'zoomInUp' |
    // 'zoomInLeft' |
    // 'zoomInRight' |
    // 'zoomOut' |
    // 'zoomOutDown' |
    // 'zoomOutUp' |
    // 'zoomOutLeft' |
    // 'zoomOutRight';

    componentDidMount() {
        this.refs.view.bounceIn(2000).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
        this.refs.view2.flash(2000).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
        this.refs.view3.flipInX(2000).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
        this.refs.view4.slideInUp(2000).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
        this.refs.view5.rotate(2000).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
    }

    bounce = (target,animated) => {
        this.refs[target][animated](800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
    }

    render() {
        return (
            <View>
                <TouchableWithoutFeedback onPress={() => {
                    this.bounce('view','bounceIn')
                }}>
                    <Animatable.View ref="view">
                        <Text style={{padding: 20}}>Click me!</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => {
                    this.bounce('view2','flash')
                }}>
                    <Animatable.View ref="view2">
                        <Text style={{padding: 20}}>Click me!</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => {
                    this.bounce('view3','flipInX')
                }}>
                    <Animatable.View ref="view3">
                        <Text style={{padding: 20}}>Click me!</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => {
                    this.bounce('view4','slideInUp')
                }}>
                    <Animatable.View ref="view4">
                        <Text style={{padding: 20}}>Click me!</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => {
                    this.bounce('view5','rotate')
                }}>
                    <Animatable.View ref="view5">
                        <Text style={{padding: 20}}>Click me!</Text>
                    </Animatable.View>
                </TouchableWithoutFeedback>
            </View>

        );
    }
}
