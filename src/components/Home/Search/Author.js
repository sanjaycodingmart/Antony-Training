import React, { Component } from 'react'
import AuthorDetails from './Context/AuthorDetails'
import Spinner from '../../Gif/Spinner.gif';
import LazyLoad from 'react-lazy-load';
import Album from './Context/Album';


class Author extends Component {

    state = {
        data : null,
        isLoading: true
    }

    fetch = async search => {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}s`, {
                            "method": "GET",
                            "headers": {
                                "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                                "x-rapidapi-key": "e79495a078mshb503c710a93d15ap17d7e4jsn1e8ed5bfe6d8"
                            }
                        });
        const data = await response.json();
        this.setState({data: data.data, isLoading: false});
       
    }

    componentWillMount = async () => {
        this.fetch(this.props.search);
    }

    componentWillReceiveProps = props => this.fetch(props.search);

    render() {
        const {data, isLoading} = this.state;
        if(isLoading) {
            return (
                <div style={{height: '90vh', width: '100vw', display: 'flex', alignContent: 'center', alignItems: 'center',textAlign:'center',justifyContent:'center'}}>
                    <img src={Spinner} height= "100" width="100"/>
                </div>
            )
        }
        
        return (
            <div>
                <AuthorDetails search={this.props.search} img={data[0].artist.picture_medium}/>
                <Album datas={data} />
                
            </div>
        )
    }
}

export default Author;
