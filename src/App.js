import './App.css';
import Login from './app/components/Login';
import GlobalStyle from './app/styles/global';

const App = () => {
	return (
		<div className="App">
			<GlobalStyle />
			<Login />
		</div>
	);
};

export default App;
