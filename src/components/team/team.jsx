import React from "react"
import s from "./team.module.css"
import {AiOutlineMinus, AiOutlineTwitter, FaFacebookF, FaLinkedinIn} from "react-icons/all";
import img6 from "../../images/img6.png"



const Team = () =>{

    return <div className={s.team}>


        <div className={s.fdiv}>
            <h1 className={s.ftitle}>Know About Us</h1>
            <AiOutlineMinus size={70} color={"#7b6c63"}/> <br/>
            <span className={s.text1}>Nam liber tempor cum soluta nobis eleifend option <br/>
            congue nihil imperdiet doming id quod mazim
</span>
        </div>


        <div className={s.photos}>
            <div className={s.all}>
            <div className={s.photo}><img src={img6} alt=""/>
                <div className={s.hover}>
                    <div className={s.icons}>

                        <div className={s.icon}>

                            <a className={s.a} href="http://www.twitter.com/"><AiOutlineTwitter color={"white"} size={30}/></a>

                        </div>

                        <div className={s.icon}>
                            <a className={s.a} href="http://www.facebook.com/"><FaFacebookF color={"white"} size={30}/></a>

                        </div>

                        <div className={s.icon}>
                            <a className={s.a} href="http://www.linkedin.com/"><FaLinkedinIn color={"white"} size={30}/></a>

                        </div>
                    </div>

                </div>

            </div>
            <div className={s.center}>
                <button className={s.btn}><h2>MITCHELL ANDERSON</h2><span>CREATIVE DIRECTOR</span></button>
            </div>
            </div>



            <div className={s.all}>
                <div className={s.photo}><img src={img6} alt=""/>
                    <div className={s.hover}>
                        <div className={s.icons}>


                            <div className={s.icon}>

                                <a className={s.a} href="http://www.twitter.com/"><AiOutlineTwitter color={"white"} size={30}/></a>

                            </div>

                            <div className={s.icon}>
                                <a className={s.a} href="http://www.facebook.com/"><FaFacebookF color={"white"} size={30}/></a>

                            </div>

                            <div className={s.icon}>
                                <a className={s.a} href="http://www.linkedin.com/"><FaLinkedinIn color={"white"} size={30}/></a>

                            </div>
                        </div>

                    </div>

                </div>
                <div className={s.center}>
                    <button className={s.btn}><h2>MITCHELL ANDERSON</h2><span>CREATIVE DIRECTOR</span></button>
                </div>
            </div>



            <div className={s.all}>
                <div className={s.photo}><img src={img6} alt=""/>
                    <div className={s.hover}>
                        <div className={s.icons}>


                            <div className={s.icon}>

                                <a className={s.a} href="http://www.twitter.com/"><AiOutlineTwitter color={"white"} size={30}/></a>

                            </div>

                            <div className={s.icon}>
                                <a className={s.a} href="http://www.facebook.com/"><FaFacebookF color={"white"} size={30}/></a>

                            </div>

                            <div className={s.icon}>
                                <a className={s.a} href="http://www.linkedin.com/"><FaLinkedinIn color={"white"} size={30}/></a>

                            </div>
                        </div>

                    </div>

                </div>
                <div className={s.center}>
                    <button className={s.btn}><h2>MITCHELL ANDERSON</h2><span>CREATIVE DIRECTOR</span></button>
                </div>
            </div>






        </div>

        <div className={s.bdiv}>

            <h1 className={s.title}>What Our Clients are saying</h1>

            <p className={s.text1}>
                “It was a pleasure to work with Imran. He is very dedicated and professional. <br/>
                He worked very hard to satisfy our requirements and the communication was great.”
            </p>

            <p className={s.john}>
                John Doe
            </p>
                <div className={s.ldiv}>
            <a className={s.link} href="http://www.yourwebsite.com">
                www.yourwebsite.com
            </a>
                </div>

        </div>

    </div>
}

export default Team;