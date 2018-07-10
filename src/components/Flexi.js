import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import UITextField from './UITextField';
import UIDropDown from './UIDropDown';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';
const FlexWrapper = styled.div`
       border-radius: 2rem;
       box-shadow: 0 0 0 1px rgba(34,36,38,.22) inset, 0 0 0 0 transparent;
       padding: 1rem;
       margin: 1rem;
`;
const FieldWrapper = styled.div`
   padding: 1rem;
`;


class Flexi extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:{}
    }
    this.renderFormFields = this.renderFormFields.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange =this.onChange.bind(this);
   }

   onSubmit(){
    
   this.props.onSubmit(this.state.data);
   }

   onChange(value,name){
     let {data} =this.state;
     _.set(data,name,value);
     this.setState({
       data
     })
   }
  renderField(item){

    switch(item.type){
        case 'TextField':
        return (
          <UITextField
            item={item}
            onChange={this.onChange}
          />
        );
       case 'DropDown':
        return (
          <UIDropDown
            item={item}
            onChange={this.onChange}
          />
        );
      default:
        return (
          <div>Nothing</div>
        );
    }

  }
  renderFormFields(items,key){

   return items.map((item,i)=>{
     if(item.multiFieldSet){
     return <FlexWrapper key={key+i}>{this.renderFormFields(item.items,"child")}</FlexWrapper>;
     }else{
           return <FieldWrapper key={key+i}><span>{item.label} :</span>{this.renderField(item)}</FieldWrapper>
     }
   });


  }
  render() {
    let {config:{items}}=this.props;

    return (<div>
      <div>Flexi component</div>
      <FlexWrapper>{this.renderFormFields(items,"parent")}</FlexWrapper>
      <Button content='Submit' onClick={this.onSubmit}/>
      </div>
    );
  }
}
Flexi.propTypes = {
	config: PropTypes.object,
  onSubmit: PropTypes.func
  

};

export default Flexi;
