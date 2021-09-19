import React from 'react';
import styled from 'styled-components';
import ImageComponent from './ImageComponent';
import LoadingState from './LoadingState';

const Spacetagram = () => {
    const [loaded, setLoaded] = React.useState(false);
    const [imageInfo, setImageInfo] = React.useState();
    React.useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?start_date=2020-06-09&end_date=2020-07-06&api_key=awLAUWzOXPZcohafQqjXGwdALXDolKYmkZBNPAu6')
            .then(res => res.json())
            .then(data => {
                setImageInfo(data);
                setLoaded(true);
            })
    }, [])
    return (loaded ?
        <Wrapper>
            <TitleWrapper>
                <Title>Spacetagram</Title>
                <Subtitle>Brought to you by NASA's space API</Subtitle>
            </TitleWrapper>
            <ContentWrapper>
                {imageInfo.map((image, index) => {
                    if (image.media_type === 'image') {
                        return <ImageComponent image={image} key={index} />
                    }
                })}
            </ContentWrapper>
        </Wrapper> :
        <LoadingState />
    )
}

export default Spacetagram;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0C2D48;
    margin-top: -20px;
    margin-left: -20px;
`;

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

const Title = styled.div`
    font-family: 'Anton', sans-serif;
    font-size: 30px;
`;

const Subtitle = styled.div`
    font-family: 'Inconsolata', monospace;
    font-size: 20px;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    background-color: #AAA8B5;
    border-radius: 20px;
`;

