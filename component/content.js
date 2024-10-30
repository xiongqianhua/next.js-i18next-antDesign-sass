import React,{useState} from 'react';
import BillBords from './billboards';
import EnvEuipment from './envEuipment';
import App from './app';
import Xiaochengxu from './xiaochengxu';
import { Skeleton } from 'antd';
const ContentComponents = (props)=>{
    console.log(props)
    let component = <Skeleton />
    if(props.type.includes(0)){
        component = <BillBords/>
    }else if(props.type.includes(1)){
        component = <EnvEuipment/>
    }else if(props.type.includes(2)){
        component = <App/>
    }else if(props.type.includes(3)){
        component = <Xiaochengxu/>
    }
    return  component
}

export default ContentComponents