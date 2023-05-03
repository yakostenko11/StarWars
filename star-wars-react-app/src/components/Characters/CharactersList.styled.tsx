import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

const StyledCharactersList = styled.ul`
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    margin: 2em 0;

    @media ${device.tablet} {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
`

export { StyledCharactersList }