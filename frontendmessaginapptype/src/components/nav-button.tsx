import Button, { ButtonProps } from '@mui/material/Button';

interface INavButtonProps extends ButtonProps {
	// eslint-disable-next-line
	component?: any;
	to?: string;
	enableHighlight?: boolean;
}

const NavButton: React.FC<INavButtonProps> = (props: INavButtonProps) => {
	const { component, to, enableHighlight, children, ...buttonProps } = props;

	return (
		<Button
			component={component}
			to={to}
			sx={{
				...(enableHighlight && {
					'&.active': {
						backgroundColor: '#FFC0CB',
					},
				}),
			}}
			{...buttonProps}
			disableRipple
		>
			{children}
		</Button>
	);
};

export default NavButton;
