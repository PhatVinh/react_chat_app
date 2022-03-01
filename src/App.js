import GlobalStyle from './components/global_style/GlobalStyle';
import ChatList from './layouts/chat_list/ChatList';
import SideBar from './layouts/side_bar/SideBar'

function App() {
	return (
		<GlobalStyle>
			<div className='grid'>
				<div className='row no-gutters'>
					<SideBar />
					<ChatList />
				</div>
			</div>
		</GlobalStyle>
	);
}

export default App;
