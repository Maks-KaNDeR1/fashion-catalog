import React from 'react'
import { Description } from '../../../common/Description/Description'
import { useMatchMedia } from '../../../utils/matchMedia'
import s from './ItemBlock.module.scss'

type PropsType = {
    primaryImg: string
    primaryTitle: string
    primaryDescription: string
    primaryDescriptionSec: string
    secondaryImg: string
    secondaryTitle: string
    secondaryDescription: string
    secondaryDescriptionSec: string
    rel?: boolean
}

export const ItemBlock: React.FC<PropsType> = ({
    rel,
    primaryImg,
    primaryTitle,
    primaryDescription,
    primaryDescriptionSec,
    secondaryImg,
    secondaryTitle,
    secondaryDescription,
    secondaryDescriptionSec
}) => {

    return (
        <div className={s.itemBlock}>
            <div className={s.itemBlock__upper} >
                <div
                    className={!rel ? s.itemBlock__upper__img : s.itemBlock__upper__imgr}
                    style={{ overflow: 'hidden' }} >
                    <img src={primaryImg} alt="" />
                </div>
                <Description
                    title={primaryTitle}
                    description={primaryDescription}
                    decriptionSec={primaryDescriptionSec}
                />
            </div>
            {
                !useMatchMedia(375) ?
                    <div className={s.itemBlock__bottom}>
                        <Description
                            title={secondaryTitle}
                            description={secondaryDescription}
                            decriptionSec={secondaryDescriptionSec}
                        />
                        <div
                            className={s.itemBlock__bottom__img}
                            style={{ overflow: 'hidden' }} >
                            <img src={secondaryImg} alt="" />
                        </div>
                    </div>
                    :
                    <div className={s.itemBlock__bottom}>
                        <div
                            className={s.itemBlock__bottom__img}
                            style={{ overflow: 'hidden' }} >
                            <img src={secondaryImg} alt="" />
                        </div>
                        <Description
                            title={secondaryTitle}
                            description={secondaryDescription}
                            decriptionSec={secondaryDescriptionSec}
                        />
                    </div>
            }
        </div>
    )
}
