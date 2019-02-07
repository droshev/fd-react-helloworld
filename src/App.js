import React, { Component } from 'react';
import './App.scss';
import {
    ActionBar,
    ActionBarHeader,
    ActionBarBack,
    Button
} from 'fundamental-react';
import { Route, Link } from 'react-router-dom';

const Page1 = () => (
    <div class="fd-shell">
        <ActionBar>
            <ActionBarHeader title={'Hello World!'} />
        </ActionBar>

        <div class="fd-shell__app">
            <div class="fd-app">
                <main class="fd-app__main">
                    <Link to="/page2">
                        <Button>Go to Page 2</Button>
                    </Link>
                </main>
            </div>
        </div>
    </div>
);

const Page2 = () => (
    <div class="fd-shell">
        <ActionBar>
            <Link to="">
                <ActionBarBack />
            </Link>
            <ActionBarHeader title={'Hello Page2!'} />
        </ActionBar>
    </div>
);

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Page1} />
                <Route path="/page2" component={Page2} />
            </div>
        );
    }
}

export default App;
