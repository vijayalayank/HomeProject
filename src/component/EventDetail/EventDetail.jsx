// import { style } from "motion/react-client";
import React from "react";
import style from "./EventDetail.module.css"
import { CiCalendar } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";


export default function EventDetails(){
    function openMap() {
    var place = "குமரவேல் இல்லம்,Ayeepettai Village,Virudhachalam, Cuddalore District,Tamil Nadu 607302";
    var url = "https://www.google.com/maps?q=" + encodeURIComponent(place);
    window.open(url, "_blank"); // Opens in a new tab
}


    return(<>
        <div className={style.main} id="details">
            <div className={style.heading}><h1>🌟 Event Details 🌟</h1></div>
            <div className={style.details}>
                <div className={style.one}>
                    <div className={style.DateTime}><span><CiCalendar /></span><h1>Date & Time</h1></div>
                    <div className={style.date}>
                        <h2>📅 Date</h2>
                        <p> Monday, December 1st, 2025</p>
                    </div>
                    <div className={style.Schedule}>
                        <h2>🕕 Schedule</h2>
                        <ul>
                            <li>Dinner : 30th November 2025 - 8:00PM</li>
                            <li>House Blessing: 8:30 AM - 10:00 AM</li>
                            <li>Breakfast: 10:00 AM - 11:00 AM</li>
                            <li>Lunch: 1:00 PM - 3:00 PM</li>
                        </ul>
                    </div>
                </div>
                <div className={style.two}>
                    <div className={style.VenueContact}><span><IoLocation /></span><h1>Venue & Contact</h1></div>
                    <div className={style.Address}>
                        <h2>📍 Address </h2>
                        <p>குமரவேல் இல்லம், <br/> Ayeepettai Village, <br/> Virudhachalam, Cuddalore District, <br/>Tamil Nadu 607302</p>
                        <button onClick={openMap}>📍 Open in map</button>
                    </div>
                    <div className={style.Contact}>
                        <h2>☎️ Contact</h2>
                        <p>+91 7540027179 <br /> For any queries or directions</p>
                        
                    </div>
                </div>
            </div>
        </div>
    </>)
}