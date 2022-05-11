import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';
import Login from './Pages/Login';
import { useEffect, useState } from 'react';
import UserMngr from './Pages/UserMngr';

export default function App() {
    const [userLoginState, setUserLoginState] = useState(false);
    useEffect(() => {
        setUserLoginState(sessionStorage.UserLoginState);
    });
    return (
        <div className='App'>
            <BrowserRouter>
                <Layout userLoginState={userLoginState}>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home userLoginState={userLoginState} />}
                        />
                        <Route
                            path='/login'
                            element={<Login userLoginState={userLoginState} />}
                        />
                        <Route
                            path='/user-manager'
                            element={<UserMngr userLoginState={userLoginState} />}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}
