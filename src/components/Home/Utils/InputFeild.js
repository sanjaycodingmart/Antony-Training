import React from 'react'

const InputFeild = ({inputHander, search}) => {
    const styles = {
        container : {
            textAlign: 'center', 
            margin: '0px!important', 
            width: '100%', 
            alignContent: 'center', 
            alignItems: 'center', 
            padding: '20px'
        },
        input : {
            backgrroundColor: '#F5F5F5',
            width: '600px',
            height: '40px',
            paddingLeft: '17px'
        },
        btn: {
            color: '#f95838',
            fontSize: '18px',
            border: '1px solid #f95838',
            marginLeft: '4px'
        }
    }
    const searchIcon = <i class="fa fa-search" aria-hidden="true"></i>;
    return (
        <div className="container" style={styles.container}>
                <input type="text" style={styles.input} placeholder='Search for Artist, Music, Podcast . . .'></input>
                <button className="btn" style={styles.btn}>{searchIcon} Search</button>
        </div>
    )
}

export default InputFeild;