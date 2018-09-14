import React, { Component } from 'react'
import {View, Text} from 'react-native';

import {Header} from './Components/Common';
import LoginForm from './Components/LoginForm';

class App extends Component{
    // componentWillMount(){
    //     firebase.initializeApp({
    //         apiKey: "AIzaSyCTYH1dbdEaY2zh9tNMRT1CBqSDQcwQnBw",
    //         authDomain: "authorization-5066d.firebaseapp.com",
    //         databaseURL: "https://authorization-5066d.firebaseio.com",
    //         projectId: "authorization-5066d",
    //         storageBucket: "authorization-5066d.appspot.com",
    //         messagingSenderId: "780587295236"
    //     });
    // }
    render(){
        return(
            <View>
                <Header headerText='Authentication'/>
                <LoginForm/>
            </View>
        );
    }
}

export default App;