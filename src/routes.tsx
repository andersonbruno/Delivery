import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';
import Home from './pages/Home';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage/>}>
                  <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}