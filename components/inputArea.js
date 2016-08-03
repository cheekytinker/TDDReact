import React, { Component } from 'react';
import { Button } from 'react-bootstrap'

export class InputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.setText = this.setText.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    setText(event) {
        this.setState({text: event.target.value});
    }

    handleClick(event) {
        this.props.onSubmit(this.state.text);
    }

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.setText}/>
                <Button onClick={this.handleClick}>Add</Button>
            </div>
        )
    }
}

InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};