// vue.config.js는 Vue CLI로 생성한 프로젝트에서 웹팩에 대한 기본 구성 설정을 추가하거나 변경할 수 있는 기능을 제공
// 기본 설정은 vue-cli-service에 내장된 복잡한 설정을 그대로 둔 채로 추가적인 설정을 할 수 있음
// 참고 : https://cli.vuejs.org/config/

// CORS 문제로 인해 다른 API 서버로의 요청이 필요한 경우 CORS나 JSONP를 사용하면 현 서버에서는 별도 설정 없이 사용해도 되지만 그렇지 않을 경우 현 서버에서 HTTP Proxy를 사용해야함
// 참고 : https://developer.mozilla.org/ko/docs/Web/HTTP/Access_control_CORS
// 아래 설정으로 인해 /api로 시작하는 경로로 요청이 들어오는 경우 http://localhost:3000/api/... 로 요청을 포워딩 하여 현 서버 자체가 HTTP Proxy 역할을 수행
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
}