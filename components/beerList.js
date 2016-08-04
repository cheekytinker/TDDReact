import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

export class BeerList extends Component {

    constructor() {
        super();
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
    }

    handleDeleteClick(index, props) {
        console.log(index);
        this.props.onDeleteItem(index);
    }

    render() {
        return this.props.items ? (
            <ul>
                {this.props.items.map((item, index) => (
                    <li key={index}>{item}<Button href={"Fred" + index} className="deleteButton" onClick={this.handleDeleteClick.bind(this, index, this.props)}>Delete</Button></li>
                ))}
            </ul>)
        : null;
    }
}

BeerList.PropTypes = {
    items: React.PropTypes.array.isRequired,
    onDeleteItem: React.PropTypes.func.isRequired
};