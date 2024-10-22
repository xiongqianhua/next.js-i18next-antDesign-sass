import axios from 'axios';
const BaseURL =  '/v1.0/';
const service = axios.create({
    baseURL: BaseURL, 
    headers: {
       "Content-Type": "application/json",
       "Access-Control-Allow-Origin": true,
       "token":"eyJ0eXAiOiJqd3QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIiLCJkYXRhIjp7InVzZXJfaWQiOjkzLCJyb2xlX3R5cGUiOjF9LCJpYXQiOjE3MjE2MTI1ODR9.NzUsYYe6NMVK2IpvE8kZjIVDj9WVEScBsYQylrXDZfA"
    },
    timeout: 10000,
    withCredentials: true
});

// 请求拦截
service.interceptors.request.use(config => {
    let JWT = sessionStorage.getItem('JWT');
    if(JWT){
        config.headers["token"] =  JWT;
    }
    return config;
});

// 返回拦截
service.interceptors.response.use((res)=> {
    console.log(res,'res')
    return res
}, (err)=> {
    const message = err.response.data && err.response.data.msg || 'unknown error';
    return Promise.reject(message);
});
function request (url, method) {
    return function (params) {
      return service[method](url, qs.stringify(params, { arrayFormat: 'brackets' })).then(
        res => {
          const {data} = res
          return data
        }
      ).catch((err) => {
        console.error(err)
        console.error('请求出错！'+err)
      })
    }
  }
  function requestGet (url, method) {
    return function (params) {
      return service[method](url, {params: params}).then(
        res => {
          if (res.data.code == 405 || res.data.code == 406 || res.data.code == 407 ) {
            console.error('请求出错！')
            return
          }
          const {data} = res
          return data
        }
      ).catch((err) => {
        console.error(err)
        console.error('请求出错！'+err)
      })
    }
  }
  function requestJson (url, method) {
    return function (params) {
      return service[method](url, params).then(
        res => {
          const {data} = res
          return data
        }
      ).catch((err) => {
        console.error(err)
        console.error('请求出错！')
      })
    }
  }
export const postJson = url => requestJson(url, 'post')
export const post = url => request(url, 'post')
export const get = url => requestGet(url, 'get')
export const upload = BaseURL
