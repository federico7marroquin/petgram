import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Main = styled.main`
    padding: 16px 30px;
`

export const Form = styled.form`
    padding: 16px 0;
`

export const Input = styled.input`
    box-sizing: border-box;
    display: block;
    margin: 0 auto;
    margin-bottom: 8px;
    padding: 8px 4px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 3px;
`

export const Button = styled.button`
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 32px;
    text-align: center;
    border-radius: 3px;
    background:  ${props => props.theme.bg};
    color: #fff;

`

export const P = styled.p`
    margin-top: 15px;
    text-align: center;
`

export const Link = styled(LinkRouter)`
    color: ${props => props.theme.bg};
    text-decoration: none;

`