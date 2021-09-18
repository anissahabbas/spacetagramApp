import React from "react";
import styled, { keyframes } from "styled-components";
import { IoRocket } from 'react-icons/io5';

const LoadingState = () => {
    return (
        <Wrapper>
            <LineWrapper >
                <Line2 />
                <Line3 />
                <Line4 />
                <Line />
                <Line5 />
                <Line6 />
            </LineWrapper>
            <Wrapper2>
                <RocketWrapper>
                    <IoRocket size='100px' />
                </RocketWrapper>
                <Text>Taking Off...</Text>
            </Wrapper2>
        </Wrapper>
    )
}


export default LoadingState;

const Wrapper2 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`;

const Text = styled.div`
    font-family: 'Anton', sans-serif;
    font-weight: bold;
    position: absolute;
    margin-top: 470px;
    font-size: 20px;
`;

const Wrapper = styled.div`
    background-color: #0C2D48;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: absolute;
    margin-top: -20px;
    margin-left: -20px;
`;

const LineWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const shake = keyframes`
    from {
        transform: rotate(318deg);
    }
    to {
        transform: rotate(312deg);
    }
`;

const RocketWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(315deg);
    margin-top: 200px;
    animation: ${shake} 100ms infinite;
`;



const translate = keyframes`
    from {
        transform: translate(0, -100px);
    }
    to {
        transform: translate(0, 1000px);
    }
`;

const Line = styled.div`
    border-right: 1px solid black;
    height: 200px;
    margin-top: -250px;
    animation: ${translate} 200ms infinite;
`;

const Line2 = styled(Line)`
    margin-right: 80px;
    animation-delay: 5s;
    animation: ${translate} 550ms infinite;
`;

const Line3 = styled(Line)`
    margin-right: 100px;
    animation: ${translate} 500ms infinite;
    animtion-delay: 3s;

`;

const Line4 = styled(Line)`
    margin-right: 200px;
    animation: ${translate} 300ms infinite;
`;

const Line5 = styled(Line)`
    margin-left: 100px;
    animation-delay: 3s;
    animation: ${translate} 500ms infinite;

`;

const Line6 = styled(Line)`
    margin-left: 150px;
    animation: ${translate} 300ms infinite;
`;
