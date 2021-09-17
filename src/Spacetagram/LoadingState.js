import React from "react";
import styled from "styled-components";
import {IoRocket} from 'react-icons/io5';

const LoadingState = () => {
    return (
        <Wrapper>
            <IoRocket size='100px'/>
        </Wrapper>
    )
}


export default LoadingState;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

