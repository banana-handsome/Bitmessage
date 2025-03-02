export default function unLock(key, realKey){
    if(key === realKey){
        return true
    }else{
        return false
    }
}