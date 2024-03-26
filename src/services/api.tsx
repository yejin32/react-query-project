export const registerUser = async (userData: Record<string, string>) => {
    try {
        const res = await fetch('https://example.com/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!res.ok) {
            throw new Error('회원가입 실패');
        }

        const data = await res.json();
        return data;
    } catch (error: unknown) { 
        if (error instanceof Error) {
            throw new Error(`회원가입 오류: ${error.message}`);
        } else {
            throw new Error('알 수 없는 오류 발생');
        }
    }
};