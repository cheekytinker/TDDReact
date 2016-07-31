import React, { Component } from 'react';
import { InputArea } from './inputArea';
import { BeerList } from './beerList';

export class BeerListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          beers: []
        };
    }

    render() {
        return (
            <div>
                <InputArea/>
                <BeerList/>
            </div>
        )
    }
}