import styled from 'styled-components';
import { device } from '../../utils/breakpoints';

const StyledModalBox = styled.div`
    background: #fff;
    border-radius: 5px;
    margin: 20px auto;
    max-height: calc(100vh - 40px);
    overflow: hidden;
    padding: 20px;
    position: relative;
    width: 60%;

    @media ${device.laptop} {
        width: 80%;
    }

    @media ${device.tablet} {
        height: 100vh;
        margin: 0;
        max-height: initial;
        padding: 20px 10px;
        width: 100%;
    }
`

export { StyledModalBox }