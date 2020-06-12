import service from './request'

//封装api 用于发送请求

export function getData(){
    return service.get()
}
