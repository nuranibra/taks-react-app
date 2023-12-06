import { NavLink , Link} from 'react-router-dom'
import style from './header.module.css'

export default function Header () {
    return <>
    <NavLink className={style.nav}>
            <Link to='/page/services' className={style.link}>Services</Link>
            <Link to='/' className={style.link}>Home</Link>
            <Link to='/page/users' className={style.link}>Users</Link>
            <Link to='/page/product' className={style.link}>Product</Link>
    </NavLink>
    </>
}