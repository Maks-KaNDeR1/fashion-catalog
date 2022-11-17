import React from 'react'
import { Title } from '../../common/MainTitle/Title'
import s from './Main.module.scss'
import Img1 from '../../assets/images/1.png'
import Img2 from '../../assets/images/2.png'
import Img3 from '../../assets/images/3.png'
import Img4 from '../../assets/images/4.png'
import { ItemBlock } from './ItemBlock/ItemBlock'
import { Slider } from './Slider/Slider'

const title = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
const description = `Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`
const decriptionSec = `Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`


export const Main = () => {
    return (
        <div className={s.main}>
            <div>
                <Title text='ut aliquip ex ea commodo consequat' />
                <ItemBlock
                    primaryImg={Img1}
                    primaryTitle={title}
                    primaryDescription={description}
                    primaryDescriptionSec={decriptionSec}
                    secondaryImg={Img2}
                    secondaryTitle={title}
                    secondaryDescription={description}
                    secondaryDescriptionSec={decriptionSec}
                />
            </div>
            <Slider />
            <div>
                <Title text='ut aliquip ex ea commodo consequat' />
                <ItemBlock
                    rel
                    primaryImg={Img3}
                    primaryTitle={title}
                    primaryDescription={description}
                    primaryDescriptionSec={decriptionSec}
                    secondaryImg={Img4}
                    secondaryTitle={title}
                    secondaryDescription={description}
                    secondaryDescriptionSec={decriptionSec}
                />
            </div>
        </div>
    )
}
