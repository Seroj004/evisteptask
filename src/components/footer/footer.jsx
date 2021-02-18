import React from "react"
import s from "./footer.module.css"
import logo from "../../images/logo.png"
import lline from "../../images/littleline.png"
import {GiLetterBomb, HiPhone, ImLocation} from "react-icons/all";
import {NavLink} from "react-router-dom";


const Footer = () =>{

    return <div className={s.footer}>
        <div className={s.center}>

        <div className={s.d1}>

            <div className={s.block}>
                <div>
                   <NavLink to="/"> <img src={logo} alt="logo"/></NavLink>
                </div>
                <p className={s.text1}>
                    Duis autem vel eum iriure dolor in <br/>
                    hendrerit in vulputate velit esse <br/>
                    molestie consequat, vel illum dolore.
                </p>

                <p className={s.text2}>
                    eugiat nulla facilisis at vero eros et <br/>
                    accumsan et iusto odio dignissim qui <br/>
                    blandit praesent luptatum zzril delenit <br/>
                    augue duis dolore te feugait nulla <br/>
                    facilisi. Nam liber tempor cum soluta
                </p>
            </div>

            <div className={s.block}>
                <h2 className={s.title1}>recent posts</h2>
                <div>
                    <div className={s.littles}>March 30, 2014</div>
                    <div className={s.big}>Duis autem vel eum iriure dolor</div>
                </div>
                <div className={s.lline}>

                    <img src={lline} alt="line"/>

                </div>
                <div>
                    <div className={s.little}>March 30, 2014</div>
                    <div className={s.big}>Duis autem vel eum iriure dolor</div>
                </div>
                <div className={s.lline}>

                    <img src={lline} alt="line"/>

                </div>
                <div>
                    <div className={s.little}>March 30, 2014</div>
                    <div className={s.big}>Duis autem vel eum iriure dolor</div>
                </div>
                <div className={s.lline}>

                    <img src={lline} alt="line"/>

                </div>
            </div>





            <div className={s.block}>

                <h2 className={s.title1}>twiter feeds</h2>

                <div>
                    <div className={s.little}>about 2 days ago <span className={s.kris}>@kristianplatt  </span></div>
                    <div className={s.big}>Good work buddy</div>
                </div>
                <div className={s.lline}>

                    <img src={lline} alt="line"/>

                </div>
                <div>
                    <div className={s.little}>about 2 days ago <span className={s.kris}>@kristianplatt  </span></div>
                    <div className={s.big}>Good work buddy</div>
                </div>
                <div className={s.lline}>

                    <img src={lline} alt="line"/>

                </div>
                <div>
                    <div className={s.little}>about 2 days ago <span className={s.kris}>@kristianplatt  </span></div>
                    <div className={s.big}>Good work buddy</div>
                </div>
                <div className={s.lline}>

                    <img src={lline} alt="line"/>

                </div>

            </div>








            <div className={s.block}>

                <h2 className={s.title1}>Our Address</h2>

                <p className={s.text1}>
                    Investigationes demonstraverunt <br/>
                    lectores legere me lius quod ii legunt <br/>
                    saepius. Claritas est etiam processus <br/>
                    dynamicus,luptatum zzril delenit <br/>
                    augue duis dolore te feugait nulla <br/>
                    facilisi. Nam liber tempor cum soluta
                </p>
<div  className={s.itexts}>
                <div className={s.itext}>
                    <ImLocation color="#929292" size={15}/>
                    <span className={s.span}>Moonshine St. 14/05 Light, Jupiter</span>
                </div>
                <div className={s.itext}>
                    <HiPhone color="#929292" size={15}/>
                    <span className={s.span}>+00 (123) 456 78 90</span>

                </div>
                <div className={s.itext}>
                    <GiLetterBomb color="#929292" size={15}/>
                    <span className={s.span}>first.last@email.com</span>
                </div>
</div>

            </div>


            
        </div>
        


    </div>
        <div className={s.d2}>
            <div className={s.lspan}> &#169; 2014 Imran Khan All Rights Reserved</div>
        </div>
    </div>

}

export default Footer