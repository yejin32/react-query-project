import React, { useState, useRef } from 'react';
import styled from 'styled-components';


const SImgUploadContainer = styled.div`
`
const SImgContainer = styled.div``;

const SImgBtnContainer = styled.div`
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
                (<>선택된 파일: {fileName}</>) 
                : (<>이미지를 첨부해 주세요.</>)}
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

