import React from 'react';
import styled from 'styled-components';

const SButtonContainer = styled.div``

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