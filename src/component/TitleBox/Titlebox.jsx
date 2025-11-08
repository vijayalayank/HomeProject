import React from "react";
import style from './TitleBox.module.css'
import image from "../../../public/images/House.png";

export default function TitleBox(){
    return(<>
                <div className={style.main}>
                    <img className={style.image} src={image} alt="image " />
                    <div className={style.opac}></div>
                    <div className={style.contain}>
                        <h1 style={{fontSize:"5rem"}}>🏠✨</h1>
                        <h1 className={style.heading}>You're Invited!</h1>
                        <h2 className={style.sub}>Housewarming Ceremony</h2>
                        <p className={style.quote}>' With joy in our hearts, we invite you to bless our new beginning '</p>
                        <button className={style.view} ><a href="#details">View Details ✨</a></button>
                    </div>
                </div>
        </>)
}