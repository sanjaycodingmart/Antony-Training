import React, { Component, Fragment } from 'react'
import InputFelid from './Utils/InputFeild';
import CustomSuggestion from './Custom/CustomSuggestion';
import Artist from './Custom/Artist';
import Spinner from '../Gif/Spinner.gif';
import Author from './Search/Author';

class Home extends Component {
    state = {
        search: '',
        data: null,
        isLoading: true,
        lang: null
    }   

    UNSAFE_componentWillMount = async () =>  {
        const language = await JSON.parse(localStorage.getItem('language'));
        const lang = language[1];
        try {
            const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${lang}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "e79495a078mshb503c710a93d15ap17d7e4jsn1e8ed5bfe6d8"
                }
            });
            const data = await response.json();
            this.setState({data: data.data, isLoading: false, lang:lang});    

        } catch (err) {
            console.log(err.message);
        }
    }

    submitHandler = search => this.setState({search});
    
    render() {
        const {search, data, isLoading} = this.state;

        if(isLoading) {
            return (
                <div style={{height: '90vh', width: '100vw', display: 'flex', alignContent: 'center', alignItems: 'center',textAlign:'center',justifyContent:'center'}}>
                    <img src={Spinner} height= "100" width="100"/>
                </div>
            )
        }
        const artist = data.splice(0,10);
        const tiles = data.splice(0,25);
        return (
            <div style={{margin: '0', padding: '0'}}>
                <InputFelid submitHandler={this.submitHandler}/>
                <div>
                    <div style={{margin: '40px 6vw'}}>
                    {
                        search === '' ? (
                            <Fragment>
                                <CustomSuggestion tiles={tiles} lang = {this.state.lang}/>
                                <Artist artist={artist} favouritesHandler={this.props.favouritesHandler} />
                            </Fragment>
                        ) : <Author  search={search}/>
                    }
                    
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Home;