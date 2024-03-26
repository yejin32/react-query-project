import React from 'react';
import styled from 'styled-components';

const SButtonContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;

    button {
        text-align: center;
        width: 90%;
        height: 50px;
        font-weight: 800;
        font-size: 17px;
        color: rgb(255, 255, 255);
        background-color: rgb(10, 90, 254);
        border: none;
        border-radius: 3px;
        outline: none;
        cursor: pointer;
    }
`

interface ButtonProps {
    id: string
    text: string
}

const Button: React.FC<ButtonProps> = ({id, text}: ButtonProps) => {
    return (
        <SButtonContainer>
            <button id={id}>{text}</button>
        </SButtonContainer>
    );
};

export default Button;