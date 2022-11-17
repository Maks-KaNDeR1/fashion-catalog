import React from 'react'
import s from './Description.module.scss'

type PropsType = {
  title: string
  description: string
  decriptionSec: string
}

export const Description: React.FC<PropsType> = ({ title, description, decriptionSec }) => {
  return (
    <div className={s.descriptionBLock}>
      <h2>{title}</h2>
      <span>{description}</span>
      <p />
      <span>{decriptionSec}</span>
    </div>
  )
}
