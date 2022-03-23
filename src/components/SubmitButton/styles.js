import styled from 'styled-components'

export const Button = styled.button`
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 32px;
    text-align: center;
    border-radius: 3px;
    background:  ${props => props.theme.bg};
    color: #fff;
    &[disabled] {
        opacity: .3;
    }
`