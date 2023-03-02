import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';
import Search from './pages/Search';
import Home from './pages/Home';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage/>}>
                  <Route index element={<Home />} />
                  <Route path='/search/:search' element={<Search/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}