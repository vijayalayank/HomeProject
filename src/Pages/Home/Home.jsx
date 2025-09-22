import React from "react";
// import style from "./Home.module.css"
import TitleBox from "../../component/TitleBox/Titlebox";
import Details from "../../component/Details/Details";
import Countdown from "../../component/Countdown/Countdown";
export default function Home(){
    return(
        <>
           
                <TitleBox/>

                 <Countdown targetDate={"2025-11-27T23:59:59"}/>
                <Details/>

               
          
        </>
    )
}