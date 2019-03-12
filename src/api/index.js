import axios from 'axios'
import qs from 'qs'
let jxServer = 'https://jxgame.chinacloudsites.cn/api'
const article = {
    rankList(id,params){
        return axios.get(`${jxServer}/${id}`,params
    )},
    starData(params){
        return axios.get(`${jxServer}/XingBanStars/Get`,params
    )},
    starInfo(id){
        return axios.get(`${jxServer}/XingBanStars/${id}`
    )},
    makexcx(scene,appId,appOwnerId,page){
        return axios.get(`https://openapis.ixingban.com/payment/Wechatpay/ACodeUnlimit?scene=${scene}&appId=${appId}&appOwnerId=${appOwnerId}&page=${page}`
    )},
}


export default {
    article,
}