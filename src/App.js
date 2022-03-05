import { useContext } from 'react';
import { ThemeContext } from './services/context';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import GlobalStyle from './components/global_style/GlobalStyle';

function App() {
	
	const [theme, dispatch] = useContext(ThemeContext);
	return (
		<GlobalStyle>
			<div className={`grid ${theme}`}>
				<div className='row no-gutters'>
					<BrowserRouter>
						<Router />
					</BrowserRouter>
				</div>
			</div>
		</GlobalStyle>
	);
}

export default App;
