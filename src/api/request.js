import  axios from 'axios'
import { config } from 'shelljs'

//创建axios实例

const  service = axios.create({
    baseURL:enheng,//配置接口
    timeout:3*1000//超时时间
})

service.interceptors.request.use(config => {
     //发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等
   // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
   config.data = JSON.stringify(config.data);
   config.headers = {
     'Content-Type':'application/x-www-form-urlencoded'
   }
   // if(token){
   //   config.params = {'token':token}
   // }
  return config

},error => {
    Promise.reject(error)
})

service.interceptors.response.use(response=>{
  //响应前拦截
},error =>{/*错误处理等*/})

export default service