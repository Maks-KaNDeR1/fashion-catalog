import React from 'react'
import logo from '../../assets/svg/logo.svg'
import phone from '../../assets/svg/phone.svg'
import { useMatchMedia } from '../../utils/matchMedia'
import s from './Header.module.scss'

export const Header = () => {
    return <header>
        <div> <img src={logo} alt="" /> </div>
        {
            !useMatchMedia(375) ?
                <div className={s.header__number} > +7 (495) 495-49-54 </div>
                : <div> <img src={phone} alt="" /> </div>
        }
    </header>
}
