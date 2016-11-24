import React from 'react';
import {render} from 'react-dom';

import Clock from './clock.jsx';

class Display extends React.Component {
    constructor() {
        super();
        let none = '55';

        this.characters = {
            '0': [
                '42', '62', '62', '64',
                '40', '42', '64', '40',
                '40', '40', '40', '40',
                '40', '40', '40', '40',
                '40', '02', '60', '40',
                '02', '62', '62', '60',
            ],
            '1': [
                '42', '62', '64', none,
                '20', '64', '40', none,
                none, '40', '40', none,
                none, '40', '40', none,
                '42', '60', '20', '64',
                '02', '62', '62', '60',
            ],
            '2': [
                '42', '62', '62', '64',
                '20', '62', '46', '40',
                '42', '26', '06', '40',
                '40', '42', '62', '60',
                '04', '02', '62', '46',
                '02', '62', '62', '60',
            ],
            '3': [
                '42', '62', '62', '64',
                '20', '62', '46', '40',
                none, '42', '06', '50',
                none, '20', '46', '47',
                '42', '62', '60', '40',
                '02', '62', '62', '60',
            ],
            '4': [
                '42', '64', '42', '64',
                '40', '04', '40', '40',
                '40', '20', '60', '40',
                '02', '62', '46', '40',
                none, none, '40', '40',
                none, none, '02', '60',
            ],
            '5': [
                '42', '62', '62', '64',
                '40', '42', '62', '60',
                '40', '20', '62', '46',
                '20', '62', '64', '40',
                '24', '62', '60', '40',
                '02', '62', '62', '60',
            ],
            '6': [
                '42', '62', '62', '64',
                '40', '42', '62', '60',
                '40', '20', '62', '46',
                '40', '42', '64', '40',
                '04', '02', '60', '40',
                '02', '62', '62', '60',
            ],
            '7': [
                '42', '62', '62', '64',
                '20', '62', '64', '40',
                none, '42', '60', '40',
                none, '02', '46', '40',
                none, none, '40', '40',
                none, none, '02', '60',
            ],
            '8': [
                '42', '62', '62', '64',
                '40', '42', '64', '40',
                '30', '20', '60', '50',
                '41', '42', '46', '47',
                '40', '02', '60', '40',
                '02', '62', '62', '60',
            ],
            '9': [
                '42', '62', '62', '64',
                '40', '42', '64', '40',
                '40', '20', '60', '40',
                '20', '62', '64', '40',
                '24', '62', '60', '40',
                '02', '62', '62', '60',
            ],

        }
        this.state = {
            character: this.characters['0']
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.character !== this.state.character) {
            this.setState({
                character: this.characters[nextProps.character]
            });
        }
    }

    render () {
        return (
                <table>
                <tbody>
                    <tr>
                        <td><Clock ticksPosition={this.state.character[0]}/></td>
                        <td><Clock ticksPosition={this.state.character[1]}/></td>
                        <td><Clock ticksPosition={this.state.character[2]}/></td>
                        <td><Clock ticksPosition={this.state.character[3]}/></td>
                    </tr>
                    <tr>
                        <td><Clock ticksPosition={this.state.character[4]}/></td>
                        <td><Clock ticksPosition={this.state.character[5]}/></td>
                        <td><Clock ticksPosition={this.state.character[6]}/></td>
                        <td><Clock ticksPosition={this.state.character[7]}/></td>
                    </tr>
                    <tr>
                        <td><Clock ticksPosition={this.state.character[8]}/></td>
                        <td><Clock ticksPosition={this.state.character[9]}/></td>
                        <td><Clock ticksPosition={this.state.character[10]}/></td>
                        <td><Clock ticksPosition={this.state.character[11]}/></td>
                    </tr>
                    <tr>
                        <td><Clock ticksPosition={this.state.character[12]}/></td>
                        <td><Clock ticksPosition={this.state.character[13]}/></td>
                        <td><Clock ticksPosition={this.state.character[14]}/></td>
                        <td><Clock ticksPosition={this.state.character[15]}/></td>
                    </tr>
                    <tr>
                        <td><Clock ticksPosition={this.state.character[16]}/></td>
                        <td><Clock ticksPosition={this.state.character[17]}/></td>
                        <td><Clock ticksPosition={this.state.character[18]}/></td>
                        <td><Clock ticksPosition={this.state.character[19]}/></td>
                    </tr>
                    <tr>
                        <td><Clock ticksPosition={this.state.character[20]}/></td>
                        <td><Clock ticksPosition={this.state.character[21]}/></td>
                        <td><Clock ticksPosition={this.state.character[22]}/></td>
                        <td><Clock ticksPosition={this.state.character[23]}/></td>
                    </tr>
                </tbody>
                </table>
               );
    }
}

export default Display

