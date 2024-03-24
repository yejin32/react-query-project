import React from 'react';
import styled from 'styled-components';

const SInputContainer= styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    
    input {
        text-align: center;
        width: 100%;
        height: 40px;
        margin-bottom: 40px;
        font-weight: 800;
        font-size: 17px;
        color: rgb(255, 255, 255);
        background-color: rgb(47, 151, 254);
        border: none;
        border-radius: 2px;
        outline: none;
    }
    input:focus::placeholder {
            color: transparent;
            
        }
    input::placeholder {
            color: rgb(255, 255, 255);
    }
`;

interface InputProps {
    id: string
    type: 'email' | 'password' | 'text'
    placeholder: string;
}

const InputField: React.FC<InputProps> = ({id, type, placeholder}: InputProps) => {
    return (
        <SInputContainer>
            <input id={id} type={type} placeholder={placeholder} autoComplete='off'/> 
        </SInputContainer>
    );
};

export default InputField;