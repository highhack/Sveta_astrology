import React from "react";
import s from './Main.module.scss'
import mainPhoto from './../../public/images/mainPhoto.jpg'
import mainPhoto1 from './../../public/images/mainPhoto1.png'
import astrologyCircle from './../../public/images/astrologyCircle.png'
import originPhoto from './../../public/images/originPhoto.jpg'
import originPhoto1 from './../../public/images/originPhoto1.jpg'
import Image from "next/image";

const Main = ({setPage}) => {

    return (
        <div className={s.main}>
            <div className={s.scope}>
                <div className={s.list}>
                    <div className={s.page_title} onClick={() => setPage('first-page') }>first</div>
                    <div className={s.page_title} onClick={() => setPage('second-page') }>second</div>
                </div>
                <div className={s.originPhoto}>
                    <Image src={originPhoto} objectFit={"contain"}
                           className={s.originPhotoContent}/>
                </div>
                <div className={s.photo}>
                    <Image src={mainPhoto}/>
                </div>
                <div className={s.originPhoto1}>
                    <Image src={originPhoto1} objectFit={"contain"}
                           className={s.originPhotoContent1}/>
                </div>
                <div className={s.photo1}>
                    <Image src={mainPhoto1}/>
                </div>
                <div className={s.astrologyCircle}>
                    <Image src={astrologyCircle}/>
                </div>
                <div className={s.svitlana_goldin}>Svitlana Goldin</div>
            </div>
        </div>
    )
}

export default Main