import React from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const SLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const SBtnContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    gap: 10px; 
    a {
        flex: 1;
        text-decoration: none;
    }
    button {
        width: 100%;
    }
`;

const LoginPage: React.FC = () => {
    
    return ( 
        <SLoginContainer>
            <InputField id='email' type='email' placeholder='ID 를 입력해주세요'/>
            <InputField id="password" type='password' placeholder='PW 를 입력해주세요'/>
                <SBtnContainer>
                    <Link to="/register">
                        <Button id='registerBtn' text='회원가입'/>
                    </Link>
                    <Link to="/mypage">
                        <Button id="loginBtn" text='로그인'/>
                    </Link>
                </SBtnContainer>
        </SLoginContainer>
    );
};

export default LoginPage;