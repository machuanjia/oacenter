let baseUrl = 'http://geteasier.cn:8082/api';

if (process.env.NODE_ENV == 'development') {
  // baseUrl = 'http://192.168.1.4:8080';

} else if (process.env.NODE_ENV == 'production') {

}

export {
    baseUrl
}
