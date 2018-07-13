import React, {Component} from 'react';
import {View, Modal, TouchableNativeFeedback, Text, Image} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';


export default class ImageView extends Component {
    static navigationOptions = ({}) => {
        return {
            title: '图片预览缩放'
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    // Simplest usage.
                    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=60",
                    // url:
                    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
                    // You can pass props to <Image />.
                    props: {
                        // headers: ...
                        source: require('../../assets/imgs/splash.png')
                    },
                    freeHeight: true
                },
                {
                    // Simplest usage.
                    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=160",
                    // url:
                    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
                    // You can pass props to <Image />.
                    props: {
                        // headers: ...
                        source: require('../../assets/imgs/splash.png')
                    },
                    freeHeight: true
                },
                {
                    // Simplest usage.
                    url: "https://avatars2.githubusercontent.com/u/7970947?v=3&s=260",
                    // url:
                    // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527660246058&di=6f0f1b19cf05a64317cbc5d2b3713d64&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0112a85874bd24a801219c7729e77d.jpg",
                    // You can pass props to <Image />.
                    props: {
                        // headers: ...
                        source: require('../../assets/imgs/splash.png')
                    },
                    freeHeight: true
                }
            ]
        }
    }

    componentDidMount() {
        const {goBack, state} = this.props.navigation;
        if (state.params.index > -1 && state.params.imgs && state.params.imgs.length) {
            let newImages = [...state.params.imgs].map((item, index) => {
                return {
                    url: `https://avatars2.githubusercontent.com/u/7970947?v=3&s=${160}`,
                    props: {
                        source: {
                            uri: item.img
                        }
                    },
                    freeHeight: true
                }
            })
            console.log(newImages);
            this.setState({
                images: newImages
            })

        }
    }

    render() {
        const {goBack, state} = this.props.navigation;
        console.log(state.params);
        return (
            <Modal
                visible={true}
                transparent={true}
                onPress={() => {
                    console.log(123);
                    goBack()
                }}>
                <ImageViewer
                    loadingRender={() => {
                        return <View><Text style={{color: '#fff', marginTop: 260}}>加载中...</Text></View>
                    }}
                    imageUrls={this.state.images}
                    index={state.params.index > -1 ? state.params.index : 0} // 默认选中第几张图
                    onClick={() => { // 点击
                        console.log(123);
                        goBack()
                    }}
                />
            </Modal>

        );
    }
}