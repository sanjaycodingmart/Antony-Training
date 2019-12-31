import React from 'react'

const Card = props => {
    const {name, id, img} = props;
    return (
        <div className="card" style={{width: '18rem'}}>
            <img className="card-img-top" src={img} height="250" width="250" alt="Card image cap"/>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-10">
                        <p className="card-text">{name}</p>
                    </div>
                    <div className="col-md-2">
                        <i class="far fa-bookmark" style={{fontSize: '22px'}}></i>
                    </div>
                </div>

               
            </div>
        </div>
    )
}

export default Card;