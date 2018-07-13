import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native'
import BaseComponet from '../../components/baseComponent'
import Swiper from 'react-native-swiper';
import API from '../../assets/js/api'
import screen from '../../assets/js/screen'

export default class SwiperDemo extends BaseComponet {
    static navigationOptions = ({}) => {
        return {
            title: '轮播图'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            bannerList: []
        }
    }

    componentDidMount() {
        API.getBannerList().then((res) => {
            console.log(res);
            if (res.code === 0) {
                this.setState({
                    bannerList: res.data.bannerList
                })
            }
        })
    }

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons>
                <View style={styles.slide1}>
                    <Text style={styles.text}>Hello Swiper</Text>
                </View>
                <View style={styles.slide2}>
                    <Text style={styles.text}>Beautiful</Text>
                </View>
                <View style={styles.slide3}>
                    <Text style={styles.text}>And simple</Text>
                </View>
            </Swiper>

        )
    }
}


const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
