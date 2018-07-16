# reactnative开发模板


### 模板功能点介绍

#### 1. fetch请求封装

    a. 封装了post和get两种常用的请求
    b. 支持自定义头部和自定义baseUrl
    c. 利用Promise.race解决fetch没有超时的缺点


#### 2. toast

    a. 利用 `react-native-easy-toast` 进行页面轻提示toast
    b. 对toast进行了全局封装

#### 3. 列表

    集成了Flatlist列表高效渲染，进行上拉加载下拉刷新功能

#### 4. 内置html预览

    集成了WebView，进行html地址预览

#### 5. 三级联动

    a. 利用 `react-native-picker` 进行三级联动集成
    b. 日期选择
    c. 时间选择
    d. 地区选择

#### 6. 图片预览缩放

    利用 `react-native-image-zoom-viewer` 进行图片预览缩放集成


#### 7. rn动画

    利用 `react-native-animatable` 进行rn动画集成


#### 8. rn轮播

    利用 `react-native-swiper` 进行rn轮播集成


#### 9. 登录功能

    利用 `react-native-storage` 加上rn内置 `AsyncStorage` 在全局定义了storage记录登录状态


#### 10. 集成mobx全局状态

    利用 `mobx` 加上 `mobx-react` 进行全局状态管理




