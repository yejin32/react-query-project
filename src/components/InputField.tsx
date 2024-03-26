import React, { useState } from 'react';
import styled from 'styled-components';

const SInputContainer= styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 30px;
    
    input {
        text-align: center;
        width: 100%;
        height: 40px;
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

    .errorMsg {
        color: rgb(236, 47, 26);
        margin-bottom: -20px;
        text-align: center;
    }
`;

interface InputProps {
    id: string
    type: 'email' | 'password' | 'text' | 'passwordCheck'
    placeholder: string;
    passwordCheck?: string;
}

const InputField: React.FC<InputProps> = ({id, type, placeholder, passwordCheck}: InputProps) => {
    const [value, setValue] = useState<string>('');
    const [error, setError] = useState<string>('');

    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
    const passwordRegex = /^(?!.*(\d)\1\1)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:\'",.<>?]).{8,13}$/;
    const nameRegex = /^.{0,5}$/ 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleValidation = () => {
        if (type === 'email' && !emailRegex.test(value)) {
            setError('아이디는 이메일 형식이어야 합니다');
        } else if (type === 'password' && !passwordRegex.test(value)) {
            setError('비밀번호는 8자리 이상 13자리 이하, 숫자/영문 대소문자/특수문자를 포함해야 합니다');
        } else if (type === 'password' && value !== passwordCheck) {
            setError('비밀번호가 일치하지 않습니다');
        } else if (type === 'text' && !nameRegex.test(value)) {
            setError('이름은 다섯글자를 넘을 수 없습니다');
        }
        else {
            setError('');
        }
    }
    
    return (
        <SInputContainer>
            <input 
            id={id} 
            type={type} 
            placeholder={placeholder} 
            autoComplete='off' 
            value={value}
            onChange={handleChange}
            onBlur={handleValidation}
            />
            {error && <div className='errorMsg'>{error}</div>}
        </SInputContainer>
    );
};

export default InputField;