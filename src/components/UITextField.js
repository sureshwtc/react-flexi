import React, { Component } from 'react';

import { Input } from 'semantic-ui-react'


class UITextField extends Component {
  constructor(props){
     super(props);
     this.onInputChange =this.onInputChange.bind(this);
  }
  onInputChange(e, data){
     this.props.onChange(data.value,this.props.item.name);
   }
  render() {

    
    return (
      <Input placeholder='Search...' onChange={this.onInputChange}/>
    );
  }
}

export default UITextField;
