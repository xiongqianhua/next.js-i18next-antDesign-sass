import {postJson,post,get,upload} from './axios';
const systemApi = {
    //monitor
    getCityData:get('/screen/areas'),//区域下拉接口
    getStationData:get('/screen/site_distribution'),//站点分布图，top10
    getElectricityCount:get('/screen/electricity_count'),//充放电统计
    getEquipmentCount:get('/screen/equipment_total'),//设备统计
    getSalesChart:get('/screen/sales_chart'),//销售图  
}
const uploadApi = {
    uploadFile: upload
}
export {
    systemApi ,
    uploadApi
}