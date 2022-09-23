import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginAndSignUp from '../components/loginAndSignupForm'
import NavBar from '../components/nav-bar';
import NavButton from '../components/nav-button';
import { ILoginRequest } from '../models/ILoginRequest';
import { IUser } from '../models/IUser';
import loginUser from '../services/LoginApi';
import { authenticatedContext } from '../context/authenticated-context'
import { getUserByEmail } from '../services/UsersApi';



interface ILoginProps {
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}


const Login: React.FC<ILoginProps> = (props: ILoginProps) => {

  const { isAuthenticated, setIsAuthenticated } = useContext(authenticatedContext);
  const navigate = useNavigate();
  const goHome = () => navigate('/mainpage', { replace: true });

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

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData.email)
    const request: ILoginRequest = {
      email: formData.email
    }

    const user: IUser = await getUserByEmail(request.email);

    console.log("USER", user);

    loginUser(request).then((value) => {
      var bcrypt = require('bcryptjs');
      if (bcrypt.compareSync(formData.password, user.password)) {
        window.sessionStorage.setItem("token", value.token);
        window.sessionStorage.setItem("user_id", user.id ? user.id?.toString() : "");
        window.sessionStorage.setItem("isAuthorized", "true");
        //props.setUser(value);
        setIsAuthenticated(true);
        goHome();
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
    <div>
      <LoginAndSignUp topText="Log In" textFields={textFields} buttons={buttons} onSubmit={handleLogin} />
    </div>

  );
}

export default Login;