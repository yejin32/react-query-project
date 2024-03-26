import React from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Button from '../components/Button';

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
    justify-content: space-between;
`;

const LoginPage: React.FC = () => {
    
    return ( 
        <SLoginContainer>
            <InputField id='email' type='email' placeholder='ID 를 입력해주세요'/>
            <InputField id="password" type='password' placeholder='PW 를 입력해주세요'/>
                <SBtnContainer>
                    <Button id='registerBtn' text='회원가입'/>
                    <Button id="loginBtn" text='로그인'/>
                </SBtnContainer>
        </SLoginContainer>
    );
};

export default LoginPage;