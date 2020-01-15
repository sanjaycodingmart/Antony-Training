import React from 'react'

const ModalInput = ({label, type, value, updateHandler}) => {
    return (
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default" style={{width: '160px'}}>{label}</span>
            </div>

            <input type={type} class="form-control" aria-label={label} aria-describedby="inputGroup-sizing-default" name={label} value={value} onChange={updateHandler} required/>
        </div>
    )
}

export default ModalInput;
