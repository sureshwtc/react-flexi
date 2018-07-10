import React, { Component } from 'react';

import { Dropdown } from 'semantic-ui-react'


class UIDropDown extends Component {
  constructor(props){
      super(props);
      this.getStateOptions = this.getStateOptions.bind(this);
      this.onDropDownChange =this.onDropDownChange.bind(this);
  }
  getStateOptions(item){
      return item.values && item.values.map((item,i)=>{
        return {
              key: item, 
              value: item, 
              text: item
         }
      });

  }
   //converted data format { key: 'AL', value: 'AL', text: 'Alabama' }
   onDropDownChange(e, data){
     this.props.onChange(data.value,this.props.item.name);
   }
  
  render() {

   let {item } =this.props
    return (
        <Dropdown placeholder='State' search selection options={this.getStateOptions(item)} onChange={this.onDropDownChange}/>
    );
  }
}

export default UIDropDown;
