import styled from 'styled-components';

type Props = {
    isOpen: boolean
}

const StyledModalOverlay = styled.div<Props>`
    background: rgba(0, 0, 0, 0.7);
    bottom: 0;
    left: 0;
    opacity: ${({ isOpen }) => isOpen ? "1" : "0"};
    position: fixed;
    right: 0;
    top: 0;
    transition: all 0.3s linear;
    visibility: ${({ isOpen }) => isOpen ? "visible" : "hidden"};
`

export { StyledModalOverlay }