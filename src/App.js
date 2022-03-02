import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import GlobalStyle from './components/global_style/GlobalStyle';

function App() {
	return (
		<GlobalStyle>
			<div className='grid'>
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
