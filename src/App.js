import React, { Component } from 'react';
import './App.scss';
import { Alert } from 'fundamental-react/dist/Alert/Alert';

class App extends Component {
    render() {
        return (
            <div className="App">
                Test
                <Alert dismissable={true} link="#" linkText="link">
                    Default alert
                </Alert>
            </div>
        );
    }
}

export default App;
