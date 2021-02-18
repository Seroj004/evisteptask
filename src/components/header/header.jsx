import React from "react"
import s from "./header.module.css"
import { FaDownload } from "react-icons/fa"


const Header = () =>{
    return  <div className={s.header}>


        <div className={s.center}>

            <span className={s.little}>grab your copy of</span> <br/>
            <span className={s.big}> The <span className={s.brown}>premium</span> Quality <br/>
            PSD Template For <span className={s.brown}>free</span></span>



            <div className={s.input}>
                <input id={5} className={s.inp} type="file"/>
                <label htmlFor="5"><div className={s.inside}>
                    <div className={s.btn}>DOWNLOAD <FaDownload/></div>
                </div></label>

            </div>

        </div>


    </div>
}


export default Header;