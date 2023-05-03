import styled from 'styled-components';

const StyledCharactersListItem = styled.li`
    border-radius: 10px;
    box-shadow: ${({ theme }) => theme.boxShadow};
    cursor: pointer;
    padding: 1em 2em;
`

export { StyledCharactersListItem }