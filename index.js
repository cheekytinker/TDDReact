import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BeerListContainer} from './components/beerListContainer';

var markup = <div><BeerListContainer/><BeerListContainer/><BeerListContainer/><BeerListContainer/><BeerListContainer/></div>

ReactDOM.render(
    markup,
    document.querySelector('#root'));