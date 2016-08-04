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
        this.deleteItem = this.deleteItem.bind(this);
    }

    addItem(name) {
        this.setState({
            beers: [].concat(this.state.beers).concat(name)
        });
    }

    deleteItem(index) {
        var newBeers = BeerListContainer.removeItemFromArray([].concat(this.state.beers), index);

        this.setState({
            beers: newBeers
        });
    }

    render() {
        return (
            <div>
                <InputArea onSubmit={this.addItem}/>
                <BeerList onDeleteItem={this.deleteItem} items={this.state.beers}/>
            </div>
        )
    }

    static removeItemFromArray(array, item) {
        return array.filter((i, index) =>{return index != item} );
    }
}