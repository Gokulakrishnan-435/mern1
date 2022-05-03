// class based component
// import React,{Component} from 'react';

// class App extends Component{
//     render(){
//         return <><h1>Welcom to class based component</h1></>
//     }
// }

// export default App;
import React, { Component } from 'react';
import Header from './Components/HeaderComponent/Header';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

