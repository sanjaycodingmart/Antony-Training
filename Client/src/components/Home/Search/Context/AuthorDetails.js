import React from 'react'

const AuthorDetails = ({search, img}) => {
    return (
        <div>
            <div className="row">
                <div className="col-md-2">
                    <div className="row">
                        <img src={img} height="100%" style={{borderRadius: '10px'}}/>
                    </div>
                </div>
                <div className="col-md-10" style={{paddingTop: '50px'}}>
                    <h1>{search} Music</h1>
                    <p>{search}</p>
                    <p>The most memorable way to tell someone you are falling in love with them is through music. Feel the love.</p>
                    <div className="row" style={{width:'280px'}}>
                        <div className="col-md-8">
                            <p style={{cursor: 'pointer', fontWeight: '900'}}>
                                <i class="fa fa-plus" aria-hidden="true" /> Add to library
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p style={{cursor: 'pointer' , fontWeight: '900'}}>
                                <i class="fa fa-share-alt" aria-hidden="true" /> Share
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorDetails;