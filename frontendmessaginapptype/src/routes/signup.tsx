import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import LoginAndSignUp from '../components/loginAndSignupForm'
import { useContext, useState } from 'react';
import { IUser } from '../models/IUser';
import { addUsers } from '../services/UsersApi';
import NavButton from '../components/nav-button';
import Login from './login';
import { NavLink, useNavigate } from 'react-router-dom';
import { authenticatedContext } from '../context/authenticated-context';

const Signup: React.FC = () => {

  const navigate = useNavigate();
  const goToLogin = () => navigate('/login', { replace: true });

  interface IFormData extends IUser {
    confirmPassword: string
  }

  const [formData, setFormData] = useState<IFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const [errors, setErrors] = useState<Set<string>>(new Set<string>);


  function handleDataChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;
    setFormData((oldValue) => {
      return (
        {
          ...oldValue,
          [name]: value
        }
      );
    });
  }

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors(new Set<string>);
    console.log(errors)
    if (checkDataInput(formData)) {
      return;
    }
    generateHashPasswordAndSubmit(formData);
    goToLogin();
  }


  function checkDataInput(data: IFormData): boolean {
    let check = false;
    Object.entries(data).forEach(([key, value], index) => {
      if (!value || value.length == 0) {
        setErrors((oldValue) => {
          oldValue.add(key);
          return new Set(oldValue);
        })
        check = true;
      }
    });
    return check
  }


  function generateHashPasswordAndSubmit(user: IFormData) {
    const bcrypt = require('bcryptjs');
    bcrypt.genSalt(10, function (err: any, salt: string) {
      bcrypt.hash(user.password, salt, function (err: any, hash: string) {
        const newUser = {
          name: user.name,
          email: user.email,
          password: hash
        }
        addUsers(newUser);
      });
    });
  }

  function getTextFields() {
    return [
      <TextField
        id="outlined"
        label='Email'
        sx={{
          width: 300
        }}
        name='email'
        onChange={handleDataChange}
        value={formData.email}
        error={errors.has('email')}
        helperText={errors.has('email') ? 'Cannot be blank' : ""}
      />,
      <TextField
        sx={{
          width: 300
        }}
        id="outlined"
        label="Display Name"
        name='name'
        onChange={handleDataChange}
        value={formData.name}
        error={errors.has('name')}
        helperText={errors.has('name') ? 'Has to be longer than 5 characters' : "You can change this later"}
      />,
      <TextField
        sx={{

          width: 300
        }}
        id="outlined"
        label="Password"
        type="password"
        name='password'
        onChange={handleDataChange}
        value={formData.password}
        error={errors.has('password')}
        helperText={errors.has('password') ? 'Has to be longer than 5 characters' : ""}
      />,
      <TextField
        sx={{

          width: 300
        }}
        id="outlined"
        label="Confirm Password"
        type="password"
        name='confirmPassword'
        onChange={handleDataChange}
        value={formData.confirmPassword}
        error={errors.has('confirmPassword')}
        helperText={errors.has('confirmPassword') ? 'Has to be longer than 5 characters' : ""}
      />
    ]
  }

  const buttons = [
    <NavButton
      component={NavLink}
      variant="contained"
      sx={{ mr: 5, width: 100 }}
      to={'/login'}
    >
      Login
    </NavButton>,
    <Button
      variant="contained"
      sx={{ ml: 5, width: 100 }}
      type="submit"
    >
      Sign Up
    </Button>];

  return (
    <div>
      <LoginAndSignUp topText="Sign Up" textFields={getTextFields()} buttons={buttons} onSubmit={submit} />
    </div>
  );
}

export default Signup;
