import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Pages/Home';

export default function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route
                            path='/'
                            element={<Home/>}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}
