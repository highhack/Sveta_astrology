import React, {useEffect} from "react";
import s from './SunMoonCircle.module.scss'
import Image from "next/image";
import sun from './../../public/images/sun1.png'
import moon from './../../public/images/moon.png'


const SunMoonCircle = () => {

    useEffect(() => {
        window.addEventListener('scroll', myFunction)
        let sunMoonCircle = document.getElementById('sun_moon_circle')
        let sun = document.getElementById('sun')
        let moon = document.getElementById('moon')
        function myFunction () {
            let totalLength = document.documentElement.scrollHeight
            let currentHeight = window.scrollY
            if (currentHeight === 0) {
                sun.style.visibility = 'hidden'
                moon.style.visibility = 'hidden'
            }
            else  {
                sun.style.visibility = 'visible'
                moon.style.visibility = 'visible'
            }
            // console.log(currentHeight)
            let a = currentHeight/(totalLength-document.documentElement.clientHeight)
            sunMoonCircle.style.transform = `rotate(${a*90}deg)`
            moon.style.transform = `rotate(${-a*90}deg)`
            sun.style.left = `${a*25+45}%`
            moon.style.left = `${a*25}%`

            sunMoonCircle.style.left = `${a*30}%`
            // sunMoonCircle.style.top = `${a*50}%`
        }
    })
    return (
        <div className={s.sun_moon_circle} id='sun_moon_circle'>
            <div className={s.sun} id='sun'>
                <Image src={sun}/>
            </div>
            <div className={s.moon} id='moon'>
                <Image src={moon}/>
            </div>
        </div>
    )
}

export default SunMoonCircle