import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Key } from 'react';

interface ILoginAndSignUpProps {

    textFields: any;
    buttons: any;


}

const Signup: React.FC<ILoginAndSignUpProps> = (props: ILoginAndSignUpProps) => {
    return (
        <Box>
            <form>
                <Grid container direction='column' justifyContent="center" alignItems="center" rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 3 }} >
                    {props.textFields.map((textField: any, index: Key | null | undefined) => {
                        return (
                            <Grid item xs={3} key={index}>
                                {textField}
                            </Grid>
                        )
                    })}

                    <Grid item xs={3}>
                        {props.buttons}
                    </Grid>
                </Grid>
            </form>


        </Box >
    );
}

export default Signup;