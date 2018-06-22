import React, { Component, Fragment } from 'react';
import './InputSelect.css';

class InputSelect extends Component {
  constructor(){
    super();

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.onChange({
      primitiveName: this.props.primitiveName,
      param: this.props.param,
      value: event.target.value
    });
  }

  render() {
    const value = this.props.value;

    const options = this.props.valuesList.map((item, index) =>{
      return React.createElement('option', {
          value: item,
          key: index,
        }, item);
    });

    const input = React.createElement('select', {
      onChange: this.onChange,
      defaultValue: value,
      className: 'InputSelect'
    }, options);
    return (
        <Fragment>{input}</Fragment>
    );
  }
}

export default InputSelect;