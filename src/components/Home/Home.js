import React, { Component } from 'react'
import InputFelid from './Utils/InputFeild';
import CustomSuggestion from './Custom/CustomSuggestion';
import Artist from './Custom/Artist';


class Home extends Component {
    state = {
        search: '',
        data: null,
        isLoading: true
    }

    UNSAFE_componentWillMount = async () =>  {
        try {
            const response = await fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=English", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
                    "x-rapidapi-key": "e79495a078mshb503c710a93d15ap17d7e4jsn1e8ed5bfe6d8"
                }
            });
            const data = await response.json();
            this.setState({data: data.data, isLoading: false});
        } catch (err) {
            console.log(err.message);
        }
    }
    inputHandler = event => this.setState({search: event.target.value});
    render() {
        const {search, data, isLoading} = this.state;

        if(isLoading) {
            return <p>Loading . . .</p>
        }
        const artist = data.splice(0,10);
        const tiles = data.splice(0,25);
        return (
            <div style={{margin: '0', padding: '0'}}>
                <InputFelid inputHander={this.inputHandler} search={search}/>
                <div style={{margin: '40px 8vw'}}>
                    <CustomSuggestion tiles={tiles}/>
                    <Artist artist={artist}/>
                </div>
            </div>
        )
    }
}

export default Home;