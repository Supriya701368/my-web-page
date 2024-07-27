import React, { lazy } from 'react'
import './Menu.css'
import Link from 'next/link'
export const Menu = ({ menuItems }) => {

    return (
        <ul data-testid="menu" className='menu'>
            {
                menuItems.map(({ id, path, text }, index) => {
                    return <li key={index}><Link id={id} href={`/${path}`}>{text}</Link></li>
                })
            }

        </ul>
    )
}
