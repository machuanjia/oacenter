import {baseUrl} from 'common/config'
import axios from 'axios'

export default {
    sendSms:function(data){
        let url = baseUrl+'/reg/sms';
        return axios.get(url, {
            params: data
        }).then((res) => {
            return Promise.resolve(res.data)
        })
    }
}