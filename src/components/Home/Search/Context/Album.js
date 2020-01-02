import React, { Component } from 'react'
import Card from './Utils/Card';

class Album extends Component {
   
    state = {
        datas: null,
        show: [],
        card: 0,
        loading: false
    }

    componentDidMount = () => {
        this.setState({datas: this.props.datas});
        const {datas, show} = this.state;
        // console.log(datas.splice(0,5))
        this.setState({show: [...show, ...this.props.datas.splice(0,5)]});
        this.scrollListner = window.addEventListener('scroll',event => {
            this.handleListner(event);
            
        })
    }

    handleListner = () => {
        const lastItem = document.getElementById('last');
        const offset = lastItem.offsetTop+lastItem.clientHeight;
        const pageOfset  = window.pageYOffset+ window.innerHeight;
        const bottom = 20;
        if(pageOfset > offset-bottom) {
            this.clickHandler();
        }
    }
    clickHandler = () => {
        const {datas, show} = this.state;
        // console.log(datas.splice(0,5))
        this.setState({show: [...show, ...datas.splice(0,5)]});
        console.log(this.state);
    }


    render() {
        if(this.state.datas === null) return <p>Loading . . .</p>
        // const {card} = this.state;

        return (
            <div style={{margin:'50px'}}>
                <div className="row">
                    {
                        this.state.show.map(data=> (
                            <div style={{marginRight:'30px'}} className="col-md-2">
                                <Card data={data} />
                            </div>
                        ))
                    }
                </div>
                <div style={{marginTop:'300px'}} id="last"></div>
            </div>
        )
    }
}


export default Album;