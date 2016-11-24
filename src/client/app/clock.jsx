import React from 'react';

import Tick from './tick.jsx';

class Clock extends React.Component {

    constructor() {
        super();
        console.log('constructor');
        this.state = {
            tick1: 0,
            tick2: 4
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.ticksPosition !== this.state.ticksPosition) {
            let tick1 = nextProps.ticksPosition[0];
            let tick2 = nextProps.ticksPosition[1];
            this.setState({
                tick1: tick1,
                tick2: tick2
            });
        }
    }

    render() {
        return (
                <div className="clock">
                    <Tick position={this.state.tick1} />
                    <Tick position={this.state.tick2} />
                </div>
        );
    }
}

export default Clock;

