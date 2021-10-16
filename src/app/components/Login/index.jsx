import { Error, Form, InputField, LoginCard, SubmitButton } from './style';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import axios from 'axios';
import { Collapse, IconButton } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { AiOutlineClose } from 'react-icons/ai';

const Login = () => {
	const emptyMSG = 'This field could not be empty';
	const schema = yup.object().shape({
		username: yup.string().required(emptyMSG),
		password: yup.string().required(emptyMSG),
	});

	const [isLogged, setIsLogged] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const errorAlert = () => (
		<Collapse in={isOpen}>
			<Alert
				severity="error"
				action={
					<IconButton
						aria-label="close"
						color="inherit"
						size="small"
						onClick={() => {
							setIsOpen(false);
						}}
					>
						<AiOutlineClose fontSize="inherit" />
					</IconButton>
				}
				sx={{ mb: 2 }}
			>
				Falha ao entrar
			</Alert>
		</Collapse>
	);

	const submission = (object) => {
		axios
			.post('https://kenzieshop.herokuapp.com/sessions/', { ...object })
			.then((response) => {
				window.localStorage.clear();
				window.localStorage.setItem('authToken', response.data.token);
				setIsLogged(true);
				setIsOpen(!isOpen);
			})
			.catch((error) => {
				console.error(error);
				setIsLogged(false);
				setIsOpen(true);
				errorAlert();
			});
	};

	return (
		<LoginCard>
			<h2>LOGIN</h2>
			<Form onSubmit={handleSubmit(submission)}>
				<InputField
					type="text"
					placeholder="User"
					{...register('username')}
				/>
				<Error>{errors.username?.message}</Error>
				<InputField
					type="password"
					placeholder="Password"
					{...register('password')}
				/>
				<Error>{errors.password?.message}</Error>
				<SubmitButton type="submit">Entrar</SubmitButton>
			</Form>
			{isLogged !== undefined && isLogged ? (
				<Collapse in={isOpen && isLogged}>
					<Alert
						severity="success"
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setIsOpen(false);
								}}
							>
								<AiOutlineClose fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						Logado com Sucesso!
					</Alert>
				</Collapse>
			) : (
				<Collapse in={isOpen && !isLogged}>
					<Alert
						severity="error"
						action={
							<IconButton
								aria-label="close"
								color="inherit"
								size="small"
								onClick={() => {
									setIsOpen(false);
								}}
							>
								<AiOutlineClose fontSize="inherit" />
							</IconButton>
						}
						sx={{ mb: 2 }}
					>
						Falha ao entrar
					</Alert>
				</Collapse>
			)}
		</LoginCard>
	);
};

export default Login;
