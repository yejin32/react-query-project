import React from 'react';
import styled from 'styled-components';
import InputField from '../components/InputField';
import Button from '../components/Button';

const SLoginContainer = styled.div`    
`;

const SBtnContainer = styled.div`
    `;

const LoginPage: React.FC = () => {
    
    return ( 
        <SLoginContainer>
            <InputField id='email' type='email' placeholder='ID 를 입력하세요'/>
            <InputField id="password" type='password' placeholder='PW 를 입력해주세요'/>
                <SBtnContainer>
                    <Button id='registerBtn' text='회원가입'/>
                    <Button id="loginBtn" text='로그인'/>
                </SBtnContainer>
        </SLoginContainer>
    );
};

export default LoginPage;