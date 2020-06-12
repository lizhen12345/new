//实现深拷贝
export default function deepClone(temp){
    if(typeof temp === 'object'){
        let clone = Array.isArray(temp) ? []:{}
        for(const key in temp){
            clone[key] = deepClone(temp[key])
        }
        return clone
    }else{
        return temp
    }
}
