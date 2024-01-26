import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import { useRouter } from 'next/navigation'

const LoginContainer = styled.div`
    max-width: 400px;
    margin: auto;
    padding: 20px;
    text-align: center;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

const Title = styled.h1`
    color: #333;
`;

const FormContainer = styled.div`
    margin: 15px 0;
`;

const Label = styled.label`
    display: block;
    margin-bottom: 5px;
`;

const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
`;

const Button = styled.button`
    background-color: #4caf50;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #45a049;
    }
`;

const GoogleButton = styled(Button)`
    background-color: #4285f4;

    &:hover {
        background-color: #357ae8;
    }
`;

const LoginScreen: React.FC = () => {
    const [authorizeUrl , setAuthorizeUrl ] = useState<any>(null);
    const router = useRouter();
    const handleLogin = () => {
        // Implement your login logic here
    };
    const handleGoogleLogin = async () => {
        try {
            const response = await fetch('/api/getAuthorizedUrl'); // Automatically mapped by Next.js
            const data = await response.json();
            setAuthorizeUrl(data); // Set the data in the state
            if (data && data.url) {
                window.location.href = data.url; // Redirect to Google login page
            } else {
                console.error('No valid URL found in the response data.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const handleTokenExchange = async (code: string) => {
        try {
            const tokenResponse = await fetch('/api/getToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code }),
            });

            const tokenData = await tokenResponse.json();
            if(tokenData){
                localStorage.setItem("tokenData", JSON.stringify(tokenData))
                router.push('/email');
            }
            // Handle the obtained access token as needed
        } catch (error) {
            console.error('Error fetching token:', error);
        }
    };

    useEffect(() => {
        // Check if the URL contains the 'code' parameter
        const urlParams = new URLSearchParams(window.location.search);
        const authorizationCode = urlParams.get('code');

        if (authorizationCode) {
            // If 'code' parameter exists, exchange it for an access token
            console.log("Authorization code:", authorizationCode);
            handleTokenExchange(authorizationCode);
        }
    }, []); // Run once when the component mounts

    return (
        <LoginContainer>
            <Title>Login</Title>
            <FormContainer>
                <Label>Email:</Label>
                <Input type="email"/>
            </FormContainer>
            <FormContainer>
                <Label>Password:</Label>
                <Input type="password"/>
            </FormContainer>
            <Button onClick={handleLogin}>Login</Button>
            <FormContainer>
                <GoogleButton onClick={handleGoogleLogin}>
                    Continue with Google
                </GoogleButton>
            </FormContainer>
            {/*{authorizeUrl && <pre>{JSON.stringify(authorizeUrl, null, 2)}</pre>}*/}
        </LoginContainer>
    );
};

export default LoginScreen;
