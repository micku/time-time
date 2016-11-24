import React from 'react';

class Tick extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rotationStyle = `rotateZ(${this.props.position*45}deg)`;
        return (
            <div className="tick-container">
                <div className="tick" style={{transform: rotationStyle}}/>
            </div>
        );
    }
}

export default Tick;
