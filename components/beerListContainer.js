import React, { Component } from 'react';
import { InputArea } from './inputArea';
import { BeerList } from './beerList';
import { Button } from 'react-bootstrap'

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
                <Button bsStyle="success">Start</Button>
            </div>
        )
    }
}