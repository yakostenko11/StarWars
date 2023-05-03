import styled from 'styled-components';

const StyledModalCloseButton = styled.button`
    background: none;
    border: none;
    color: #333;
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
    outline: none;
    position: absolute;
    right: 20px;
    top: 10px;
    transition: all 200ms;

    &:hover {
        color:${({ theme }) => theme.accentColor};
    }
`

export { StyledModalCloseButton }