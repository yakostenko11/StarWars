import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

const StyledModalContent = styled.div`
    margin: 1em 2em;

    @media ${device.tablet} {
        margin: 1em 0;
    }
`

export { StyledModalContent }