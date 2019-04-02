import axios from 'axios'
import { Message, Loading } from 'element-ui';

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
     }
}