import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';
import LoadingState from './LoadingState';

const Spacetagram = () => {
    const [loaded, setLoaded] = React.useState(false);
    const [imageInfo, setImageInfo] = React.useState();
    React.useEffect(() => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=755&camera=MAST&api_key=awLAUWzOXPZcohafQqjXGwdALXDolKYmkZBNPAu6')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setImageInfo(data.photos);
                setLoaded(true);
            })
    }, [])
    console.log(imageInfo);
    return (loaded ?
        <Wrapper>
            <ContentWrapper>
                <Title>Spacetagram</Title>
                <Subtitle>Brought to you by NASA's space API</Subtitle>
                {imageInfo.slice(1, 25).map((image) => {
                    return (
                        <ImageWrapper>
                            <Image src={image.img_src} />
                            <InfoWrapper>
                                <TextWrapper>
                                    <ImageTitle>{image.rover.name} Rover - {image.camera.full_name}</ImageTitle>
                                    <ImageDate>{image.earth_date}</ImageDate>
                                </TextWrapper>
                                <LikeButton />
                            </InfoWrapper>
                        </ImageWrapper>
                    )
                })}
            </ContentWrapper>
        </Wrapper> :
        <LoadingState />
    )
}

export default Spacetagram;

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
    background-color: beige;
    border-radius: 20px;
`;


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

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

