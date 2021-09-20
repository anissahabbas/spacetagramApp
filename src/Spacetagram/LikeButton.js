import React from "react";
import styled, { keyframes } from "styled-components";
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const LikeButton = () => {
    const [isLiked, setIsLiked] = React.useState(false);

    return (
        <Button onClick={() => setIsLiked(!isLiked)}>
            {isLiked ?
                <>
                    <PoppingHeart size='25px' color='#663266' />
                    <FaHeart size='25px' color='#663266' />
                </> :
                <FaRegHeart size='25px' />}
        </Button>
    )
}

export default LikeButton;

const grow = keyframes`
    from {
        transform: scale(100%);
    }
    to {
        transform: scale(150%);
    }

`;
const PoppingHeart = styled(FaHeart)`
    size: 25px;
    position: absolute;
    animation: ${grow} 300ms;
`;

const Button = styled.button`
    border: none;
    background-color: white;
    width: 50px;
    height: 30px;
    cursor: pointer;
`;