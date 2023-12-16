import s from "./../styles/Home.module.scss";
import Head from "next/head";
import Zodiac from "../components/Zodiac/Zodiac";
import React, { useState } from "react";
import Main from "../components/Main/Main";
import SunMoonCircle from "../components/SunMoonCircle/SunMoonCircle";
import NightPage from "../components/SecondPage/NightPage/NightPage";
import SecondPage from "../components/SecondPage/SecondPage";
import { Element } from "react-scroll";

const Home = () => {
  const [page, setPage] = useState("first-page");
  return (
    <div>
      <Element name="Home" id="Home">
        <Main setPage={setPage} />
      </Element>
      {page === "first-page" && (
        <Element name="Zodiacs" id="Zodiacs">
          <Zodiac />
        </Element>
      )}
      {page === "first-page" && (
        <Element name="Contacts" className="w-full h-[100vh]">
          contacts
        </Element>
      )}
      {page === "second-page" && (
        <div className="">
          <SunMoonCircle />
          <SecondPage />
        </div>
      )}
    </div>
  );
};

export default Home;
