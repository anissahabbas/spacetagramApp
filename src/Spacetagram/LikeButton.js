import React from "react";
import styled from "styled-components";
import { FaRegHeart, FaHeart } from 'react-icons/fa';

const LikeButton = () => {
    const [isLiked, setIsLiked] = React.useState(false);
    return (
        <Button onClick={() => setIsLiked(!isLiked)}>
            {isLiked ?
                <FaHeart size='25px' /> :
                <FaRegHeart size='25px'/>}
        </Button>
    )
}

export default LikeButton;


const Button = styled.button`
    border: none;
    background-color: white;
    width: 50px;
    height: 30px;
    cursor: pointer;
`;