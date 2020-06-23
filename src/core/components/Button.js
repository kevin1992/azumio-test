import React from 'react';
import styled from 'styled-components';
import { Color } from '../styles/variables'

const ButtonContainer = styled.button`
border-radius: 10px;
    width: 150px;
    height: 70px;
    color: white;
    font-size: 17px;
    outline: none;
    
  &:hover{
    cursor:pointer;
  }
`

const AButtonContainer = styled(ButtonContainer)`
  background-color: ${Color("purple")};
  border: ${Color("purple")} 1px solid;
  box-shadow: ${Color("purple")} 3px 3px 10px;
  
  &:active{
    background-color: ${Color("purple",0.5)};
  }
  
`

const IButtonContainer = styled(ButtonContainer)`
  background-color: transparent;
  border: ${Color("gray")} 1px solid;
  color:  ${Color("gray")};
  
   &:active{
    background-color:  ${Color("gray",0.3)};
  }
  
`


const Button = props => {

    const ButtonComponent = props.active ? AButtonContainer : IButtonContainer;

    return (
        <React.Fragment>
            <ButtonComponent>
                {props.children}
            </ButtonComponent>
        </React.Fragment>
    );
};
export default Button;
