import styled from 'styled-components'
import {Link} from 'gatsby'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? 'black': '#077BF1')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ primary }) => (primary ? '10px' : '6px')};
    font-weight: bold;
    letter-spacing: 3px;
    text-align: center;
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s !important;
    border-radius: ${({ round }) => (round ? '50px': 'none')};

    &:hover {
        background: ${({ primary }) => (primary ? '#077BF1' : '#F26A2E')};
        transform: translateY(-2px);
    }
`