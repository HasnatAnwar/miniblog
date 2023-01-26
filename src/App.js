import './App.css';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Sidebar from './pages/Sidebar';
import Explore from './pages/Explore';
import Profile from './pages/Profile';
import Message from './pages/Message';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <div className='main'>
                        <Sidebar />
                        <Home />
                    </div>
                }>
                </Route>
                <Route path='/explore' element={
                    <div className='main'>
                        <Sidebar />
                        <Explore />
                    </div>
                }/>
                <Route path='/profile' element={
                    <div className='main'>
                        <Sidebar />
                        <Profile />
                    </div>
                }/>
                <Route path='/message' element={
                    <div className='main'>
                        <Sidebar />
                        <Message />
                    </div>
                }/>

            </Routes>
        </BrowserRouter>
    );
}

export default App;
