import {baseUrl} from 'common/config'
import axios from 'axios'
import qs from 'qs'

// axios.defaults.headers['Content-Type'] = "application/json;charset=UTF-8";

export default {
  submit: function (data) {
    let url = baseUrl + '/reg/submit'
    let _data = {
      orgName:data.name,
      orgDomain:data.domain,
      userName:data.userName,
      passwd:data.passwd,
      code:123456,
      phone:'18401125500'
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
