import React from 'react';
import styled from 'styled-components';

const SButtonContainer = styled.div`
    width: 100%;
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
    isLoading?: boolean
}

const Button: React.FC<ButtonProps> = ({id, text, isLoading}: ButtonProps) => {
    return (
        <SButtonContainer>
            <button id={id} disabled={isLoading}>
            {isLoading ? '로딩 중...' : text}            
            </button>
        </SButtonContainer>
    );
};

export default Button;