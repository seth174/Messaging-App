import { Button, Typography } from '@mui/material';
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


  const [failedLogin, setFailedLogin] = useState<boolean>(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(authenticatedContext);
  const navigate = useNavigate();
  const goHome = () => navigate('/mainpage', { replace: true });

  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    setIsLoading(true);
    e.preventDefault();
    const request: ILoginRequest = {
      email: formData.email
    }

    const user: IUser = await getUserByEmail(request.email);

    const login = async () => await loginUser(request).then(async (value) => {
      var bcrypt = require('bcryptjs');
      if (await bcrypt.compareSync(formData.password, user.password)) {
        window.sessionStorage.setItem("user_id", user.id ? user.id?.toString() : "");
        window.sessionStorage.setItem("isAuthorized", "true");
        const token = value.token;
        window.sessionStorage.setItem("token", token);
        //props.setUser(value);
        setIsAuthenticated(true);
        goHome();
      }
      else {
        setIsLoading(false);
        setFailedLogin(true);
      }
    }).catch((error) => {
      setFailedLogin(true);
      setIsLoading(false);
    }
    );
    await login();

  }

  function getTextFields() {
    return (
      [
        <TextField
          id="outlined"
          label="Email"
          sx={{
            width: 300
          }}
          name='email'
          onChange={handleDataChange}
          value={formData.email}
          error={failedLogin}
          helperText={failedLogin ? 'Email or Password Incorrect' : ""}
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
          error={failedLogin}
          helperText={failedLogin ? 'Email or Password Incorrect' : ""}
        />]

    );
  }

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
      <LoginAndSignUp topText="Log In" textFields={getTextFields()} buttons={buttons} onSubmit={handleLogin} />
      {isLoading && <div style={{ justifyContent: 'center', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '100' }} >
        <div className="dot-pulse" style={{ margin: 50 }}></div>
      </div>}
    </div >

  );
}

export default Login;