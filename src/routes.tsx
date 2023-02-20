import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultPage from './components/DefaultPage';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<DefaultPage/>}>
                    <Route index element={<h1>batata</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}