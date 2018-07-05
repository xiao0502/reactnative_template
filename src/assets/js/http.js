// let baseUrls = "https://h5.tyfund.com/api/h5/"; //服务器地址
// const timeout = 5000; //请求超时时间;
// let headers = {
//     "Content-Type": "application/json;charset=UTF-8"
// };
export default class Http {
    // default baseUrl
    static baseUrls = "http://yapi.demo.qunar.com/mock/12672/api/"; //服务器地址
    // default timeout
    static timeout = 10000;
    // default header
    static headers = {
        "Content-Type": "application/json;charset=UTF-8"
    }

    /**
     * 基于 fetch 封装的 GET请求
     * @param url 接口名称
     * @param params 参数
     * @param customHeaders 自定义头部
     * @param customBaseUrl 自定义baseUrl
     * @returns {Promise}
     */
    static get(url, params, customHeaders, customBaseUrl) {
        if (Object.prototype.toString.call(customHeaders) === "[object Object]") {
            this.headers = Object.assign(headers, customHeaders);
            if (Object.prototype.toString.call(customBaseUrl) === "[object String]") {
                this.baseUrls = customBaseUrl;
            }
        } else if (Object.prototype.toString.call(customHeaders) === "[object String]") {
            this.baseUrls = customHeaders;
        }

        if (params) {
            let paramsArray = [];
            Object.keys(params).forEach(key =>
                paramsArray.push(key + "=" + params[key])
            );
            if (url.search(/\?/) === -1) {
                url += "?" + paramsArray.join("&");
            } else {
                url += "&" + paramsArray.join("&");
            }
        }
        let self = this;
        return new Promise(function (resolve, reject) {
            Promise.race([
                fetch(self.baseUrls + url, {
                    method: "GET",
                    headers: self.headers
                }),
                new Promise(function (resolve, reject) {
                    setTimeout(() => reject(new Error("request timeout")), self.timeout);
                })
            ])
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status: response.status});
                    }
                })
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                })
                .finally(() => {
                    // console.log('finally');
                })
        });
    }

    /**
     * 基于 fetch 封装的 POST请求
     * @param url 接口名称
     * @param params 参数
     * @param customHeaders 自定义头部
     * @param customBaseUrl 自定义baseUrl
     * @returns {Promise}
     */
    static post(url, params, customHeaders, customBaseUrl) {
        if (Object.prototype.toString.call(customHeaders) === "[object Object]") {
            this.headers = Object.assign(headers, customHeaders);
            if (
                Object.prototype.toString.call(customBaseUrl) === "[object String]"
            ) {
                this.baseUrls = customBaseUrl;
            }
        } else if (
            Object.prototype.toString.call(customHeaders) === "[object String]"
        ) {
            this.baseUrls = customHeaders;
        }
        let self = this;
        return new Promise(function (resolve, reject) {
            Promise.race([
                fetch(self.baseUrls + url, {
                    method: "POST",
                    headers: self.headers,
                    body: JSON.stringify(params)
                }),
                new Promise(function (resolve, reject) {
                    setTimeout(() => reject(new Error("request timeout")), self.timeout);
                })
            ])
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        reject({status: response.status});
                    }
                })
                .then(response => {
                    resolve(response);
                })
                .catch(err => {
                    reject(err);
                })
                .finally(() => {
                    // console.log('finally');
                })
        });
    }
}
