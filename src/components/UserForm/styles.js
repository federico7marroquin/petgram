import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const Main = styled.div`
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
    &[disabled] {
        opacity: .3;
    }
`

export const P = styled.p`
    margin-top: 15px;
    text-align: center;
`

export const Link = styled(LinkRouter)`
    color: ${props => props.theme.bg};
    text-decoration: none;

`

export const Error = styled.span`
    color: red;
    font-size: 14px;
`