import React, { Component } from 'react';

export class InputArea extends Component {
    render() {
        return (
            <div>
                <input/>
                <button>Add</button>
            </div>
        )
    }
}

InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};