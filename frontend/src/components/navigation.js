import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import { Avatar } from 'antd'

const navLinks = [
    {
        title: 'Inicio',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Iniciar Sesión',
        path: '/login'
    },
    {
        title: 'Perfil',
        path: '/profile'
    }
]

export default function Navigation({user}) {
    const [menuActive, setMenuActive] = useState(false)

    return (
    <nav className="site-navigation" role="navigation">
        <span className="menu-title">BlogueoLibre</span>
        <div className={`menu-content-container ${menuActive && 'active'}`}>
            <ul>
            { navLinks.map((link, index) => (
                <li key={index}>
                    <Link to={link.path}>{link.title}</Link>
                </li>
                ))
            }
            </ul>
            <span className="menu-avatar-container">
                <Avatar src="https://3.bp.blogspot.com/-dXo_lzAviR8/T5Wcpr-9LOI/AAAAAAAAAHY/bKfI9XW4ke8/s1600/Escudo+LDA.png" size={38}  />
                <span className="menu-avatar-name">{`${user.firstName} ${user.lastName}`}</span>
            </span>
        </div>           
        <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />   
    </nav>
    )
}
