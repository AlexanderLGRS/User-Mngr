import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';

export default function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route
                            path='/'
                            // element={}
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </div>
    );
}
