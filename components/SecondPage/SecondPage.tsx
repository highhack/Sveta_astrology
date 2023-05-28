import React from "react";
import s from "./SecondPage.module.scss";
import NightPage from "./NightPage/NightPage";

const SecondPage = () => {
  return (
    <div className={s.second_page_block}>
      <NightPage />
    </div>
  );
};

export default SecondPage;
