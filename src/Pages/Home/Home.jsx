import React from "react";
// import style from "./Home.module.css"
import TitleBox from "../../component/TitleBox/Titlebox";
import Details from "../../component/Details/Details";
import Countdown from "../../component/Countdown/Countdown";
// import { style } from "motion/react-client";
import BlessingsWall from "../../component/Blessing/Blessing";
import style from "./Home.module.css"
import EventDetails from "../../component/EventDetail/EventDetail";
import ThankYou from "../../component/ThankYou/ThankYou";
export default function Home(){
    return(
        <>
           
               
                 <TitleBox/>
                 <div className={style.contain}>
                 <Countdown targetDate={"2025-12-01T01:30:00+05:30"}/>
                <Details/>
                <EventDetails/>
                <BlessingsWall/>
                <ThankYou/>
               </div>

               
          
        </>
    )
}