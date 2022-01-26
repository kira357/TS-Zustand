import React from 'react'
import { Spin } from 'antd';

interface Props {
    inverted?: boolean;
}
const loadingComponent = ({inverted}: Props) => {
    return (
        <div className='py-5 text-center container '>
        <Spin size="large" spinning={inverted}  tip="Loading...">
        </Spin>
        </div>
    
    )
}

export default loadingComponent

