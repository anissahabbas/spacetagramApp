import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';
import LoadingState from './LoadingState';

const Spacetagram = () => {
    const [loaded, setLoaded] = React.useState(false);
    const [imageInfo, setImageInfo] = React.useState();
    React.useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?start_date=2020-06-09&end_date=2020-09-06&api_key=awLAUWzOXPZcohafQqjXGwdALXDolKYmkZBNPAu6        ')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImageInfo(data);
                setLoaded(true);
            })
    }, [])
    console.log(imageInfo);
    return (loaded ?
        <Wrapper>
            <TitleWrapper>
                <Title>Spacetagram</Title>
                <Subtitle>Brought to you by NASA's space API</Subtitle>
            </TitleWrapper>
            <ContentWrapper>
                {imageInfo.map((image) => {
                    if (image.media_type === 'image') {
                        return (
                            <ImageWrapper>
                                <Image src={image.url} />
                                <InfoWrapper>
                                    <TextWrapper>
                                        <ImageTitle>{image.title}</ImageTitle>
                                        <ImageDate>{image.date}</ImageDate>
                                    </TextWrapper>
                                    <LikeButton />
                                </InfoWrapper>
                            </ImageWrapper>
                        )
                    }
                })}
            </ContentWrapper>
        </Wrapper> :
        <LoadingState />
    )
}

export default Spacetagram;

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #AAA8B5;
    width: 700px;
    border-radius: 20px;
    padding-bottom: 10px;
    margin-bottom: 20px;
    margin-top: 20px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    background-color: #AAA8B5;
    border-radius: 20px;
`;


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0C2D48;
    margin-top: -20px;
    margin-left: -20px;
`;

const Title = styled.div`
    font-family: 'Anton', sans-serif;
    font-size: 30px;

`;

const Subtitle = styled.div`
    font-family: 'Inconsolata', monospace;
    font-size: 20px;
`;

const ImageWrapper = styled.div`
    height: 600px;
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

const ImageTitle = styled.div`
    width:500px;
    text-align: left;
    font-weight: bold;
    margin-top: 5px;
    font-size: 20px;
`;

const ImageDate = styled.div`
    width:500px;
    text-align: left;
    margin-top: 5px;
`;

