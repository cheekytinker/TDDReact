import React, { Component } from 'react';
import { InputArea } from './inputArea';
import { BeerList } from './beerList';


export class BeerListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          beers: []
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(name) {
        this.setState({
            beers: [].concat(this.state.beers).concat(name)
        });
    }

    render() {
        return (
            <div>
                <InputArea onSubmit={this.addItem}/>
                <BeerList items={this.state.beers}/>
            </div>
        )
    }
}