import styled from 'styled-components';
import {Common} from "./Common";

export const Column = styled(Common)`
  flex-direction: column;
  ${props => props.fit && `flex: 1 1 auto;`};
  ${props => props.expand && `min-height: ${'100vh'}`};
  ${props => props.top && 'justify-content: flex-start'};
  ${props => props.middle && 'justify-content: center'};
  ${props => props.bottom && 'justify-content: flex-end'};
  ${props => props.left && 'align-items: flex-start'};
  ${props => props.center && 'align-items: center'};
  ${props => props.right && 'align-items: flex-end'};
  ${props => props.stretch && `width: 100%`};
`;
