import styled from 'styled-components'
import { NavLink as LinkRouter } from 'react-router-dom'
import { fadeIn } from '../../styles/animation'

export const Nav = styled.nav`
position: fixed;
z-index: 1000;
display: flex;
justify-content: space-around;
align-items: center;
bottom: 0; 
margin: 0 auto;
width: 100%;
max-width: 500px;
height: 50px;
border-top: 1px solid #e0e0e0;
background: #fcfcfc;
`

export const Link = styled(LinkRouter)`
  display: inline-flex;
  align-items: center;
  height: 100%;
  width: 100%;
  color: #888;
  justify-content: center;
  text-decoration: none;
    &[aria-current] {
        ${fadeIn({ time: '0.5s' })};
        color: #000;
        &:after {
        content: '·';
        position: absolute;
        bottom: 0;
        font-size: 34px;
        line-height: 20px;
    }
    }
   
    
`    