import React, { Component } from 'react';

export class InputArea extends Component {
    render() {
        return <input/>
    }
}

InputArea.PropTypes = {
  onSubmit: React.PropTypes.func.isRequired
};