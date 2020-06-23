import React from 'react';
import styled from 'styled-components';
import {Row} from "../layout/Row";
import { Color } from '../styles/variables'

const DotContainer = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 8px;
`

const ADotContainer = styled(DotContainer)`
    width: 13px;
    height: 13px;
    border-radius: 13px;
    background-color:  ${Color("purple")};
`

const IDotContainer = styled(DotContainer)`
background-color: ${Color("gray",0.3)};
`


const Dot = props => {

    const DotComponent = props.active ? ADotContainer : IDotContainer;

    return (
        <Row marginLeft={8}>
            <DotComponent/>
        </Row>
    );
};
export default Dot;
