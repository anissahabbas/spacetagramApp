import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';

const ImageComponent = ({ image }) => {
    return (
        <ImageWrapper>
            <Image src={image.url} />
            <InfoWrapper>
                <TextWrapper>
                    <ImageTitle >{image.title}</ImageTitle>
                    <ImageDate>{image.date}</ImageDate>
                </TextWrapper>
                <LikeButton />
            </InfoWrapper>
            <Description >{image.explanation}</Description>
        </ImageWrapper>
    )
}

export default ImageComponent;

const ImageWrapper = styled.div`
    width: 650px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin-top: 30px;
    border-radius: 20px;
    font-family: 'Inconsolata', monospace;
`;

const Image = styled.img`
    max-height: 500px;
    max-width: 600px;
    border-radius: 20px;
    margin-top: 30px;
`;

const InfoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImageTitle = styled.div`
    width:500px;
    text-align: left;
    font-weight: bold;
    margin-top: 5px;
    font-size: 20px;
`;

const ImageDate = styled.div`
    width: 500px;
    text-align: left;
    margin-top: 5px;
`;

const Description = styled.div`
    padding: 20px;
`;

