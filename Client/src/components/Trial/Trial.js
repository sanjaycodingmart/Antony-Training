import React, { Component } from 'react'
import Firebase from '../Firebase/Config';

class Trial extends Component {

    async componentWillMount() {
        // new Firebase().doCreateUserWithEmailAndPassword('anto@gmail.com','abcd@1234');
        try {
            const res = await new Firebase().doSignInWithEmailAndPassword('anto@gmail.com','abcd@1234');
            // const res = await new Firebase().
            console.log(res);
            
        } catch (err) {
            console.log(err.message);
        }
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Trial;
