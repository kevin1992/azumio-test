import styled from 'styled-components';
import {Common} from "./Common";

export const Row = styled(Common)`
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  ${props => props.expand && `width: 100%`};
  ${props => props.fit && `flex: 1 1 auto`};
  ${props => props.noFlex && `flex: 0 1 auto`};
  ${props => props.top && 'align-items: flex-start'};
  ${props => props.middle && 'align-items: center'};
  ${props => props.bottom && 'align-items: flex-end'};
  ${props => props.left && 'justify-content: flex-start'};
  ${props => props.center && 'justify-content: center'};
  ${props => props.right && 'justify-content: flex-end'};
  ${props => props.spaceBetween && 'justify-content: space-between'};
  ${props =>
props.truncate &&
`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  `};
`;
