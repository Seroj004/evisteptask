import React from "react"
import s from "./portfolio.module.css"
import {AiOutlineMinus, FaLongArrowAltRight} from "react-icons/all";
import img1 from  "../images/img1.png"
import img2 from  "../images/img2.png"
import img3 from  "../images/img3.png"
import img4 from  "../images/img4.png"



const Portfolio = () =>{

    return <div>

        <div className={s.fdiv}>
            <h1 className={s.ftitle}>Some Recent Projects</h1>
            <AiOutlineMinus size={70} color={"#7b6c63"}/> <br/>
            <span className={s.text1}>Nam liber tempor cum soluta nobis eleifend option <br/>
            congue nihil imperdiet doming id quod mazim
</span>
        </div>

        <div className={s.photos}>

            <div className={s.photo}><img src={img1} alt=""/>
                <div className={s.hover}>
                    <div className={s.center}>

                    <h3>PPAPERCLIPS</h3>

                    <div className={s.hovericon}><AiOutlineMinus color={"white"} size={20}/></div>

                    <h4>BRANDING</h4>
                    </div>

                </div>
            </div>

            <div className={s.photo}><img src={img2} alt=""/>
                <div className={s.hover}>
                    <div className={s.center}>

                    <h3>PPAPERCLIPS</h3>

                    <div className={s.hovericon}><AiOutlineMinus color={"white"} size={20}/></div>

                    <h4>BRANDING</h4>
                    </div>

                </div>
            </div>
            <div className={s.photo}><img src={img3} alt=""/>
                <div className={s.hover}>
                    <div className={s.center}>

                    <h3>PPAPERCLIPS</h3>

                    <div className={s.hovericon}><AiOutlineMinus color={"white"} size={20}/></div>


                    <h4>BRANDING</h4>
                    </div>
                </div>
            </div>
            <div className={s.photo}><img src={img4} alt=""/>


                <div className={s.hover}>
                    <div className={s.center}>

                    <h3>PPAPERCLIPS</h3>

                    <div className={s.hovericon}><AiOutlineMinus color={"white"} size={20}/></div>

                    <h4>BRANDING</h4>
                    </div>

                </div>
            </div>



        </div>

        <div className={s.lat}>

            <h2 className={s.from}>LATEST FROM TWITTER
            </h2>

            <p className={s.text2}>
                Trying out velositey - a simple website building extension for Photoshop.
            </p>
                <div className={s.link}>
            <a className={s.a} href="http://www.google.am">buff.ly/NC8gog</a>
                </div>

        </div>

        <div className={s.photos}>
            <div className={s.photo}><img src={img1} alt=""/>
                <div className={s.hover}>
                    <div className={s.center}>

                        <h3>PPAPERCLIPS</h3>

                        <div className={s.hovericon}><AiOutlineMinus color={"white"} size={20}/></div>

                        <h4>BRANDING</h4>
                    </div>

                </div></div>
        <div className={s.photo}><img src={img2} alt=""/>
            <div className={s.hover}>
                <div className={s.center}>

                    <h3>PPAPERCLIPS</h3>

                    <div className={s.hovericon}><AiOutlineMinus color={"white"} size={20}/></div>

                    <h4>BRANDING</h4>
                </div>

            </div></div>
        <div className={s.photo}><img src={img3} alt=""/>
            <div className={s.hover}>
                <div className={s.center}>

                    <h3>PPAPERCLIPS</h3>

                    <div className={s.hovericon}><AiOutlineMinus color={"white"} size={20}/></div>

                    <h4>BRANDING</h4>
                </div>

            </div></div>
        <div className={s.photo}><img src={img4} alt=""/>
            <div className={s.hover}>
                <div className={s.center}>

                    <h3>PPAPERCLIPS</h3>

                    <div className={s.hovericon}><AiOutlineMinus color={"white"} size={20}/></div>

                    <h4>BRANDING</h4>
                </div>

            </div></div>

        </div>

        <div className={s.button}>
            <button className={s.btn}>SEE ALL <FaLongArrowAltRight/></button>
        </div>



    </div>
}

export default Portfolio;