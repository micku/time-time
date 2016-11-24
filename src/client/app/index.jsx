import React from 'react';
import {render} from 'react-dom';

import Display from './display.jsx';

class App extends React.Component {

    constructor() {
        super();
        console.log('constructor');
        this.state = { currentCount: 0 };
    }

    componentDidMount() {
        var intervalId = setInterval(this.timer.bind(this), 1000);
        // store intervalId in the state so it can be accessed later:
        this.setState({intervalId: intervalId});
    }

    componentWillUnmount() {
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
    }

    timer() {
        // setState method is used to update the state
        let newState = this.state.currentCount >= 9 ? 0 : this.state.currentCount + 1;
        this.setState({ currentCount: newState });
    }

    render () {
        return (
                <div>
                    <Display character={this.state.currentCount}/>
                </div>
               );
    }
}

render(<App/>, document.getElementById('app'));
