import React, { useState } from 'react';
import styled from 'styled-components';
import ImgUploader from '../components/ImgUpload';
import InputField from '../components/InputField';
import Button from '../components/Button';
import { useMutation } from 'react-query';
import { registerUser } from '../services/api';

const SRegisterContainer = styled.div`
    form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    }   
    button {
    width: 50%;
    }
`

const RegisterPage = () => {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const mutation = useMutation(registerUser);

    const formDataToRecord = (formData: FormData): Record<string, string> => {
        const record: Record<string, string> = {};
        formData.forEach((value, key) => {
            record[key] = value.toString();
        });
        return record;
    };

    const handleRegister = async (formData: FormData) => {
        setIsLoading(true);
        const startTime = Date.now();
        try {
            const userData = formDataToRecord(formData);
            await mutation.mutateAsync(userData);
            console.log('회원가입 성공');
            const endTime = Date.now();
            const delay = endTime - startTime;
            const remainingTime = delay < 1000 ? Math.max(500, 1000 - delay) : 0;
            await new Promise(resolve => setTimeout(resolve, remainingTime));
        } catch (error) {
            console.error('회원가입 실패:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        handleRegister(formData);
    };


    return (
        <SRegisterContainer>
            <form onSubmit={handleSubmit}>
                <ImgUploader/>
                <InputField id='email' type='email' placeholder='ID 를 입력해주세요'/>
                <InputField id='password' type='password' placeholder='PW 를 입력해주세요'/>
                <InputField id='passwordCheck' type='password' placeholder='PW 확인' passwordCheck=''/>
                <InputField id='text' type='text' placeholder='이름을 입력해 주세요'/>
                <Button id='registerBtn' text='회원가입' isLoading={isLoading}/>
            </form>
        </SRegisterContainer>
    );
};

export default RegisterPage;