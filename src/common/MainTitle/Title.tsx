import React from 'react'
import s from './Title.module.scss'

type PropsType = {
    text: string
}

export const Title: React.FC<PropsType> = ({ text }) => {
    return <div className={s.title}>
        <h2>{text}</h2>
    </div>
}
