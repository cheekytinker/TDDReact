import React, { Component } from 'react';

export class InputArea extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.setText = this.setText.bind(this);
    }

    setText(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div>
                <input value={this.state.text} onChange={this.setText}/>
                <button>Add</button>
            </div>
        )
    }
}

InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};