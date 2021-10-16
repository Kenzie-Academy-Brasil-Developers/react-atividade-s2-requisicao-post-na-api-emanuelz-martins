import styled from 'styled-components';

export const LoginCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background-color: #f1dfd1;
	background-image: linear-gradient(315deg, #f1dfd1 0%, #f6f0ea 74%);
	box-shadow: #00000030 0px 10px 20px, #0000003b 0px 6px 6px;
	border-radius: 10px;

	min-height: 480px;
	width: 65vw;
	padding: 15px;

	@media (min-width: 768px) {
		width: 35rem;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-around;

	height: 150px;
`;

export const InputField = styled.input`
	border: none;
	border-bottom: 1px solid black;
	background: none;
	margin-bottom: 1em;

	:focus {
		border-bottom: 1px solid green;
		outline: none;
	}
`;

export const SubmitButton = styled.button`
	border: 1px solid black;
	border-radius: 10px;
	background: none;
	margin-top: 3em;
	padding: 10px;

	:hover {
		cursor: pointer;
		transform: scale(1.06, 1.06);
		transition: all.5s;
		color: green;
		border: 1px solid green;
		letter-spacing: 1px;
	}

	@media (min-width: 480px) {
		width: 6em;
		margin: 0 auto;
	}

	@media (min-width: 768px) {
		width: 10em;
	}
`;

export const Error = styled.span`
	font-size: 10px;
	text-align: start;
	color: firebrick;
`;
