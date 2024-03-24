import React from 'react';
import styled from 'styled-components';
import ImgUploader from '../components/ImgUpload';
import InputField from '../components/InputField';
import Button from '../components/Button';

const SRegisterContainer = styled.div``

const RegisterPage = () => {
    return (
        <SRegisterContainer>
            <ImgUploader/>
            <InputField id='email' type='email' placeholder='ID 를 입력해주세요'/>
            <InputField id='password' type='password' placeholder='PW 를 입력해주세요'/>
            <InputField id='passwordCheck' type='password' placeholder='PW 확인'/>
            <InputField id='text' type='text' placeholder='이름을 입력해 주세요'/>
            <Button id='registerBtn' text='회원가입'/>
        </SRegisterContainer>
    );
};

export default RegisterPage;