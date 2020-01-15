import React from 'react'
 
const Card = ({language, color, selectLanguageHandler}) => {
    return (
        <div className="card" style={{margin: '5px', textAlign: 'center', backgroundColor: {color}}} onClick={()=>selectLanguageHandler(language)}>
            <div className="card-body">
                <h5 className="card-title">{language}</h5>
            </div>
        </div>
    )
}

export default Card;