import { Route, Routes } from 'react-router-dom';
import { ChatList, SideBar } from '../layouts';
import { Chat } from '../pages';

const Router = () => {
    return (
        <Routes>
            <Route path='/messages/:id'
                element={
                    <>
                        <SideBar />
                        <ChatList />
                        <Chat />
                    </>
                } 
            />
            {/* <Route component={NotFound} /> */}
        </Routes>
    )
}

export default Router