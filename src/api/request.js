import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'

export const request = axios.create({
    baseURL:'',
    timeout:5000,
})

request.interceptors.request.use(config=>{
    const token = '';
    if(token){
      config.headers['token'] = token;
    }
},error=>{
    console.log(error);
    return Promise.reject(error);
})

request.interceptors.response.use(response=>{
  if(response.status!==200){
    Message({
      message:response.message || '服务器繁忙,请稍后重试',
      type:error,
      duration:5000,
    })
    return Promise.reject(new Error(response.message || 'Error'))
  } else {
    return response.data;
  }
},error=>{
  Message({
    message:error.message,
    type:'error',
    duration:5000,
  })
  return Promise.reject(error)
})


