import s from './../styles/Home.module.scss'
import Head from "next/head";
import Zodiac from "../components/Zodiac/Zodiac";
import React, {useState} from "react";
import Main from "../components/Main/Main";
import SunMoonCircle from "../components/SunMoonCircle/SunMoonCircle";
import NightPage from "../components/NightPage/NightPage";
import SecondPage from "../components/SecondPage/SecondPage";


const Home = () => {

    const [page, setPage] = useState('first-page')
    return (
        <div className={s.wrapper}>
            <Main setPage={setPage}/>
            {page === 'first-page' && <Zodiac/>}
            {page === 'second-page' &&
            <>
                <SunMoonCircle/>
                <SecondPage/>
                <NightPage/>
            </>
            }
        </div>
    )
}

export default Home
