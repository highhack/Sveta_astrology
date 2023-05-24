import s from './Navbar.module.scss'
import Link from "next/link";
import {useRouter} from "next/router";
import Image from "next/image";
// import logo from './../../public/logo.png';

const navigation = [
    {id: 1, title:  'Home', path: '/'},
    {id: 2, title:  'Posts', path: '/posts'},
    {id: 3, title:  'Contacts', path: '/contacts'}
]

const Navbar = () => {
    const {asPath} = useRouter()
    return (
        <nav className={s.nav}>
            <div className={s.logo}>
            <Image  alt='' src={'/logo.png'} width='60px' height='60px'/>
            </div>
            <div className={s.links}>
                {navigation.map(({id, title, path}) => {
                    return  <Link key={id} href={path}>
                        <a className={asPath === path ? s.active : s.link}>{title}</a>
                    </Link>
                })}

            </div>
        </nav>
    )
}

export default Navbar;