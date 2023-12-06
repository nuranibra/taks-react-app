import Header from './components/header';
import './index.css';
import {Outlet} from 'react-router-dom'

export default function App () {
    return <>
    <div>
        <Header />
        <Outlet />
    </div>
    </>
}