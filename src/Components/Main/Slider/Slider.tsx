import React, { useEffect, useRef, useState } from 'react'
import s from './Slider.module.scss'
import Img1 from '../../../assets/images/11.png'
import Img2 from '../../../assets/images/12.png'
import Img3 from '../../../assets/images/13.png'
import Img4 from '../../../assets/images/14.png'
import Img5 from '../../../assets/images/15.png'
import Img6 from '../../../assets/images/16.png'
import Img7 from '../../../assets/images/17.png'
import Img8 from '../../../assets/images/18.png'
import Img9 from '../../../assets/images/19.png'
import Img10 from '../../../assets/images/20.png'
import Img11 from '../../../assets/images/21.png'
import Img12 from '../../../assets/images/22.png'
import { Title } from '../../../common/MainTitle/Title'

type PropsType = {
    refk?: React.RefObject<HTMLDivElement>
}
export const Slider: React.FC<PropsType> = () => {

    const [translate, setTranslate] = useState(0)

    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleShow = () => {
            if (window.outerWidth > 380) {
                if (window.scrollY > 1440) {
                    setTranslate(Math.floor(46 + (100 - window.scrollY / 10)))
                }
                if (ref.current) { ref.current.style.transform = `translate3d(${translate}vw, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)` }
            }
        };

        window.addEventListener("scroll", handleShow);
        return () => {
            window.removeEventListener("scroll", handleShow);
        };
    }, [setTranslate, translate])


    return (
        <div className={s.horizontalSectionWrapper}  >
            <div className={s.animationTtriggers} >
                <div className={s.triggerSection} ></div>
                <div className={s.triggerSection} ></div>
            </div>
            <div className={s.viewport}>
                <Title text='Lorem ipsum dolor sit amet' />
                <div ref={ref} className={s.slider}>
                    <img src={Img1} alt="" />
                    <img src={Img2} alt="" />
                    <img src={Img3} alt="" />
                    <img src={Img4} alt="" />
                    <img src={Img5} alt="" />
                    <img src={Img6} alt="" />
                    <img src={Img7} alt="" />
                    <img src={Img8} alt="" />
                    <img src={Img9} alt="" />
                    <img src={Img10} alt="" />
                    <img src={Img11} alt="" />
                    <img src={Img12} alt="" />
                </div>
            </div>
        </div>
    )
}
