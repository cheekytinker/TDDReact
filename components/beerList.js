import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

export class BeerList extends Component {
    render() {
        return this.props.items ? (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={index}>{item}<Button>Delete</Button></li>
                ))}
            </ul>)
        : null;
    }
}

BeerList.PropTypes = {
    items: React.PropTypes.array.isRequired
};