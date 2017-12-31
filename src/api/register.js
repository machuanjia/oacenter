import {baseUrl} from 'common/config'
import axios from 'axios'
import qs from 'qs'


export default {
  sendSms: function (data) {
    let url = baseUrl + '/reg/sms'
    // let _data = qs.stringify(data)
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  },
  vailedSms: function (data) {
    let url = baseUrl + '/reg/next'
    // let _data = qs.stringify(data)
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }
}
