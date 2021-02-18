import React from "react"
import s from "./contact.module.css"
import horizonline from "../../images/horizonline.png"


const Contact = () =>{
    return <div className={s.contact}>


        <h1 className={s.title}>contact</h1>
        
        <div className={s.inputs}>


        <div className={s.input1}>
            <input type="text" placeholder="Name*"/>
        </div>

            <div className={s.input2}>
                <input type="text" placeholder="Email*"/>
            </div>

                  </div>

        <div className={s.input3}>
            <input type="text" placeholder="Message..."/>
        </div>

        <div className={s.photo}>
            <img src={horizonline} alt="line"/>
        </div>

                <div className={s.button}>
            <button className={s.btn}>
                Submit
            </button>
                </div>


    </div>
}


export default Contact;