import axios from 'axios'
import {Message} from 'view-design'
import config from '@/config'
import tokenUtl from "./tokenUtil";

class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.queue = {}
    }

    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        return config
    }

    destroy(url) {
        delete this.queue[url];
        if (!Object.keys(this.queue).length) {
        }
    }

    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            // 添加全局的loading...
            // if (!Object.keys(this.queue).length) {
            //   Spin.show() // 不建议开启，因为界面不友好
            // }
            this.queue[url] = true;
            if (tokenUtl.getToken()) { // 判断是否存在token，如果存在的话，则每个http header都加上token
                config.headers.token = tokenUtl.getToken();
            }
            return config
        }, error => {
            return Promise.reject(error)
        });
        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url);
            const {data, status} = res;
            if (status == 200 && data && config.apiSuccessCode.includes(data.code)) {
                return data
            } else if (data.message) {
                Message.error(data.message);
                return Promise.reject(data.message)
            }
        }, error => {
            this.destroy(url);
            return Promise.reject(error)
        })
    }

    request(options) {
        const instance = axios.create();
        options = Object.assign(this.getInsideConfig(), options);
        this.interceptors(instance, options.url);
        return instance(options)
    }
}

export default HttpRequest
