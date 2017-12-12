let baseUrl = 'http://39.106.121.103:8080';

if (process.env.NODE_ENV == 'development') {

} else if (process.env.NODE_ENV == 'production') {

}

export {
    baseUrl
}
