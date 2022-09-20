import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LoginAndSignUp from '../components/loginAndSignupForm'
import NavButton from '../components/nav-button';
import { ILoginRequest } from '../models/ILoginRequest';
import { IUser } from '../models/IUser';
import loginUser from '../services/LoginApi';



interface ILoginProps {
	setUser: React.Dispatch<React.SetStateAction<IUser>>;
	setIsAuthentidcated: React.Dispatch<React.SetStateAction<boolean>>;
}


const Login: React.FC<ILoginProps> = (props: ILoginProps) => {

	const [formData, setFormData] = useState({
		email: '',
		password: ''
	});

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

	function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		console.log(formData.email)
		const request: ILoginRequest = {
			email: formData.email
		}
		loginUser(request).then((value) => {
			var bcrypt = require('bcryptjs');
			console.log('here')
			console.log(bcrypt.compareSync(formData.password, value.password))
			if (bcrypt.compareSync(formData.password, value.password)) {
				console.log('authenticated');
				props.setUser(value);
				props.setIsAuthentidcated(true);
			}
		});

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
		<NavButton
			component={NavLink}
			variant="contained"
			sx={{ mr: 5, width: 100 }}
			to={'/signup'}
		>
			Sign up
		</NavButton>,
		<Button
			variant="contained"
			sx={{ ml: 5, width: 100 }}
			type="submit"
		>
			Login
		</Button>]


	return (
		<LoginAndSignUp textFields={textFields} buttons={buttons} onSubmit={handleLogin} />
	);
}

export default Login;