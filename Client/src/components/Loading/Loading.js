import React from 'react'
import Spinner from '../Gif/Spinner.gif';

const Loading = () => {
    return (
        <div style={{height: '90vh', width: '100vw', display: 'flex', alignContent: 'center', alignItems: 'center',textAlign:'center',justifyContent:'center'}}>
            <img src={Spinner} height= "100" width="100"/>
        </div>
    )
}

export default Loading;