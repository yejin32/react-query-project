import React, { useState, useRef } from 'react';
import styled from 'styled-components';


const SImgUploadContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-weight: 800;
    font-size: 17px;
    `
const SImgContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(47, 151, 254); 
    width: 85%;
    height: 300px;
    margin-bottom: 40px;
    border-radius: 3px;
`;

const SImgBtnContainer = styled.div`
    background-color: rgb(10, 90, 254);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    border-radius: 3px;
    input {
        display: none;
    }
`;


const ImgUpload = () => {
    const [fileName, setFileName] = useState<string>('');
    const imgUploadInput = useRef<HTMLInputElement | null>(null);

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const seletedFile = event.target.files[0];
            setFileName(seletedFile.name);
        }
    }

    return (
        <SImgUploadContainer>
            <SImgContainer>
                {fileName ? 
                (<div>선택된 파일: {fileName}</div>) 
                : (<div>이미지를 첨부해 주세요</div>)}
            </SImgContainer>
            <SImgBtnContainer>
                <label htmlFor='img'>이미지 업로드</label>
                <input
                    type="file"
                    id="img"
                    accept="image/*"
                    required
                    ref={imgUploadInput}
                    onChange={onImageChange}
                />
            </SImgBtnContainer>
        </SImgUploadContainer>
    );
};

export default ImgUpload;

