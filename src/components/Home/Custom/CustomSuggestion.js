import React from 'react'

const CustomSuggestion = ({tiles}) => {
    const url = 'https://cdns-images.dzcdn.net/images/artist/e1913fff012a231e86c300395171dc81/250x250-000000-80-0-0.jpg';
    const img1 = tiles[0].artist.picture_medium;
    const img2 = tiles[4].artist.picture_medium;
    const img3 = tiles[3].artist.picture_medium;
    const img4 = tiles[11].artist.picture_medium;
    return (
        <div className="row">
            <div className="col-md-2">
                <div className="row" style={{width: '250px', height: '125px'}}>
                    <div className="col-md-6">
                        <img src={img1} height="50%"/>
                    </div>
                    <div className="col-md-6">
                        <img src={img2} height="50%"/>
                    </div>
                </div>
                <div className="row" style={{width: '250px', height: '125px'}}>
                    <div className="col-md-6">
                        <img src={img3} height="50%"/>
                    </div>
                    <div className="col-md-6">
                        <img src={img4} height="50%"/>
                    </div>
                </div>
            </div>
            <div className="col-md-10" style={{paddingTop: '50px'}}>
                <h1>I'm in Love: Hindi</h1>
                <p>By Google Play Music</p>
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
    )
}

export default CustomSuggestion;