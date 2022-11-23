import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';
import { Key } from 'react';
import NavBar from './nav-bar';

interface ILoginAndSignUpProps {

	textFields: any;

	buttons: any;

	onSubmit: any;

	topText: string;
}

const LoginAndSignUp: React.FC<ILoginAndSignUpProps> = (props: ILoginAndSignUpProps) => {
	return (
		<Box>
			<NavBar />

			<Typography variant='h4' sx={{ textAlign: 'center', fontWeight: 'bold', mt: 4 }} color='primary'>{props.topText}</Typography>

			<form onSubmit={props.onSubmit}>
				<Grid container direction='column' justifyContent="center" alignItems="center" rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 0 }} >
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

export default LoginAndSignUp;
