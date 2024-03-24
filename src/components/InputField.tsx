import React from 'react';
import styled from 'styled-components';

const SInputContainer= styled.div``;

interface InputProps {
    id: string
    type: 'email' | 'password'
    placeholder: string;
}

const InputField: React.FC<InputProps> = ({id, type, placeholder}: InputProps) => {
    return (
        <SInputContainer>
            <input id={id} type={type} placeholder={placeholder}/> 
        </SInputContainer>
    );
};

export default InputField;