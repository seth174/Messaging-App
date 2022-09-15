import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { useState } from 'react';

const Login: React.FC = () => {

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


    function comparePassword(password: string): boolean | undefined {
        return true;
    }

    return (
        <Box>
            <form>
                <Grid container direction='column' justifyContent="center" alignItems="center" rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 3 }} >
                    <Grid item xs={3}>
                        <TextField
                            id="outlined"
                            label="Email"
                            sx={{
                                width: 300
                            }}
                            name='email'
                            onChange={handleDataChange}
                            value={formData.email}
                        />
                    </Grid>
                    <Grid item xs={3}>

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
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" sx={{ mr: 5, width: 100 }}>Sign Up</Button>
                        <Button
                            variant="contained"
                            sx={{ ml: 5, width: 100 }}
                        >
                            Login
                        </Button>
                    </Grid>
                </Grid>
            </form>


        </Box >
    );
}

export default Login;