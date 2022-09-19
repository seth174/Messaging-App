import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { useState } from 'react';
import LoginAndSignUp from '../components/loginAndSignupForm'
import { IUser } from '../models/IUser';
import loginUser from '../services/LoginApi';


const Login: React.FC = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [user, setUser] = useState<IUser | undefined>(undefined);

    const [possibleUser, setPossibleUser] = useState<IUser | undefined>(undefined);

    function handleDataChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.currentTarget;
        setFormData((oldValue) => {
            return (
                {
                    ...oldValue,
                    [name]: value
                }
            );
        })
    }

    function handleLogin() {
        loginUser(formData.email).then((value) => setPossibleUser(possibleUser));

        console.log(possibleUser);

    }

    const textFields = [
        <TextField
            id="outlined"
            label="Email"
            sx={{
                width: 300
            }}
            name='email'
            onChange={handleDataChange}
            value={formData.email}
        />,
        <TextField
            sx={{

                width: 300
            }}
            id="outlined"
            label="Password"
            type="password"
            name='password'
            value={formData.password}
            onChange={handleDataChange}
        />];

    const buttons = [
        <Button
            variant="contained"
            sx={{ mr: 5, width: 100 }}>
            Sign Up
        </Button>,
        <Button
            variant="contained"
            sx={{ ml: 5, width: 100 }}
            onClick={handleLogin}
        >
            Login
        </Button>]


    return (
        <LoginAndSignUp textFields={textFields} buttons={buttons} />
    );
}

export default Login;