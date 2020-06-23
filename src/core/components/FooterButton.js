import React from 'react';
import styled from 'styled-components';
import { Color } from '../styles/variables'

const ButtonContainer = styled.button`
  
  background-color: transparent;
  border: transparent;
  outline: none;
  font-size: 17px;
    
  &:hover{
    cursor:pointer;
  }
`

const AButtonContainer = styled(ButtonContainer)`
color:  ${Color("purple")};
`

const IButtonContainer = styled(ButtonContainer)`
color:  ${Color("gray")};
`


const FooterButton = props => {

    const ButtonComponent = props.active ? AButtonContainer : IButtonContainer;

    return (
        <React.Fragment>
            <ButtonComponent>
                {props.children}
            </ButtonComponent>
        </React.Fragment>
    );
};
export default FooterButton;
