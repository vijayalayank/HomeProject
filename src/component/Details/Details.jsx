import React from "react";
import style from './Details.module.css'
import { CiStar } from "react-icons/ci";

export default function Details(){
    return(<>
        <div className={style.main}>
            <div className={style.contain}>
                <div className={style.heading}><h1>⏰ Auspicious Timings ⏰</h1></div>
                <div className={style.time}>
                    <div className={style.one}>
                        <h1>Golden time</h1>
                        <div className={style.sub1}>
                            <div className={style.item}>
                                <div style={{color:"orange" , fontSize:"1.5rem"}}><CiStar /></div>
                                <div>
                                    <p>Griha Pravesh</p>
                                    <p>6:30 AM - 7:15 AM</p>
                                </div>
                            </div>
                             <div className={style.item}>
                                <div style={{color:"orange" , fontSize:"1.5rem"}}><CiStar /></div>
                                <div>
                                    <p>Ganesh Pooja</p>
                                    <p>6:00 AM - 6:30 AM</p>
                                </div>
                            </div>
                             <div className={style.item}>
                                <div style={{color:"orange" , fontSize:"1.5rem"}}><CiStar /></div>
                                <div>
                                    <p>Vastu Shanti</p>
                                    <p>7:15 AM - 8:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.two}>
                        <div><h1>Traditional Significance</h1></div>
                        <div style={{display:"flex",gap:"1rem",flexDirection:"column"}}>
                            <div  className={style.sub2}><p>🕉️</p><p>The ceremony begins with Ganesh Pooja to remove obstacles</p> </div>
                            <div  className={style.sub2}><p>🏠</p><p>Griha Pravesh marks the first auspicious entry into our new home</p></div>
                            <div  className={style.sub2}><p>🌟</p><p>Vastu Shanti ensures harmony and positive energy</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}