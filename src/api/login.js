import {baseUrl} from 'common/config'
import axios from 'axios'
import qs from 'qs'


export default {
  login: function (data) {
    let url = baseUrl + '/signin'
    let _data = {
      name:data.name,
      pwd:data.pwd
    }
    // let __data = qs.stringify(_data)
    return axios.post(url, _data,{
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }
}
