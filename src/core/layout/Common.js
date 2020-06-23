import styled from 'styled-components';
import { Color, getTxtColorByBkg, device } from '../styles/variables';

const defaultPadding = 20;

const setPadding = padding => {
  return padding.toString().length && padding !== true
  ? padding
  : defaultPadding;
};

export const Common = styled.div`
  ${props =>
props.fixed &&
`
    position: fixed;
`};
  ${props =>
props.inline ? 'display: inline-flex' : 'display: flex'};
  color: ${props =>
props.color ? Color(props.color) : getTxtColorByBkg(props.bkg, props.fade)};
  ${props => props.bkg && `background-color: ${Color(props.bkg, props.fade)}`};
  ${props =>
props.border &&
`border: ${props.borderSize || 1}px solid ${Color(
props.border,
props.borderFade ? props.borderFade : props.fade ? props.fade : 'default',
)}`};
  ${props => props.radius && `border-radius: ${props.radius}px;`};
  ${props => props.paddingAll && `padding:${setPadding(props.paddingAll)}px`}
  ${props =>
props.paddingTop && `padding-top:${setPadding(props.paddingTop)}px`};
  ${props =>
props.paddingLeft && `padding-left:${setPadding(props.paddingLeft)}px`};
  ${props =>
props.paddingRight && `padding-right:${setPadding(props.paddingRight)}px`};
  ${props =>
props.paddingBottom &&
`padding-bottom:${setPadding(props.paddingBottom)}px`};
  ${props =>
props.paddingX &&
`padding-left:${setPadding(props.paddingX)}px; 
    padding-right:${setPadding(props.paddingX)}px;`};
  ${props =>
props.paddingY &&
`padding-top:${setPadding(props.paddingY)}px; 
    padding-bottom:${setPadding(props.paddingY)}px;`};
  ${props => props.marginAll && `margin:${setPadding(props.marginAll)}px`};
  ${props => props.marginTop && `margin-top:${setPadding(props.marginTop)}px`};
  ${props =>
props.marginLeft && `margin-left:${setPadding(props.marginLeft)}px`};
  ${props =>
props.marginRight && `margin-right:${setPadding(props.marginRight)}px`};
  ${props =>
props.marginBottom && `margin-bottom:${setPadding(props.marginBottom)}px`};
  ${props =>
props.marginX &&
`margin-left:${setPadding(props.marginX)}px; margin-right:${setPadding(
props.marginX,
)}px;`};
  ${props =>
props.marginY &&
`margin-top:${setPadding(props.marginY)}px; margin-bottom:${setPadding(
props.marginY,
)}px;`};
  ${props => props.flex && `flex: ${props.flex};`};
  ${props => props.width && `width: ${props.width};`};
  ${props => props.height && `height: ${props.height};`};
  ${props => props.multiline && `flex-wrap: wrap`};

  ${props =>
props.hide &&
`
    @media ${device[props.hide]} {
      display: none;
    }
  `};

  ${props =>
props.show &&
`
    display: none;
    @media ${device[props.show]} {
      display: flex;
    }
  `};

  ${props =>
props.bkgImage &&
`
    background-size: cover;
    background-image: url(${props.bkgImage});
  `};

  &.hover {
    ${`cursor: pointer `};
  }
  
  ${props => props.textCenter ? 'text-align:center;' : ''}
`;

