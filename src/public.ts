import axios from 'axios'
import { Loading, Message } from 'element-ui';

// axios.defaults.baseURL = 'http://'

export default {
    // 公共数据
    data: {
        // loading对象
        loading: null
    },

    // 打开loading
    openLoading() {
        return Loading.service({
            lock: true,
            text: '加载中……',
            background: 'rgba(0, 0, 0, 0.5)'
        });
    },

    // 关闭loading
    closeLoading() {
        this.data.loading.close(); 
    },

    // ajax方法封装
    getAjaxData(type: string, url: string) {
        axios({
             method: type,
             url: url,
         }).then((res: object) => {
            
         }, (rej: object) => {
            // 请求失败
            Message({
                showClose: true,
                message: '获取数据出错，请刷新重试！',
                type: 'error'
            });
         })
     },
     
    // 全屏显示
    // setFullDisplay() {
    //     let usablePrefixMethod;
    //     let element = document.body;
    //     let method = 'RequestFullScreen';
    //     ["webkit", "moz", "ms", "o", ""].forEach(function (prefix) {
    //         if (usablePrefixMethod) return;
    //         if (prefix === "") {
    //             // 无前缀，方法首字母小写
    //             method = method.slice(0, 1).toLowerCase() + method.slice(1);
    //         }
    //         let typePrefixMethod = typeof element[prefix + method];
    //         if (typePrefixMethod + "" !== "undefined") {
    //             if (typePrefixMethod === "function") {
    //                 usablePrefixMethod = element[prefix + method]();
    //             } else {
    //                 usablePrefixMethod = element[prefix + method];
    //             }
    //         }
    //     });
    //     return usablePrefixMethod;
    // },
}