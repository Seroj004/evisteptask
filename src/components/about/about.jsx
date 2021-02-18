import React from "react"
import s from "./about.module.css"
import {AiOutlineMinus, FaFlask, FaLongArrowAltRight, HiOutlineSpeakerphone, RiTeamFill} from "react-icons/all";
import photo1 from "../../images/photo1.png"
import CountUp from 'react-countup';


const About = () =>{

    return <div className={s.about}>

        <div className={s.fdiv}>
            <h1 className={s.ftitle}>Know About Us</h1>
            <AiOutlineMinus size={70} color={"#7b6c63"}/> <br/>
            <span className={s.text1}>Nam liber tempor cum soluta nobis eleifend option <br/>
            congue nihil imperdiet doming id quod mazim
</span>
        </div>

        <div className={s.bcolor}>

            <div className={s.best}>
                <div className={s.center}>



                <h2 className={s.stitle}>
                    We Are the best
                </h2>
                <p className={s.text2}>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt <br/>
                ut laoreet dolore magna aliquam erat </p>

                <p className={s.text3}>Volutpat wisi enim ad minim veniam, quis nostrud exerci tation ullamcor- <br/>
                per suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem <br/>
                vel eum iriure dolor in hendrerit in vulputate velit esse molestie conse- <br/>
                quat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et <br/>
                iusto odio dignissim qui blandit praesent luptatum zzril delenit augue <br/>
                duis dolore te feugait nulla facilisi. Nam liber tempor cum </p>
                    <div className={s.button}>
                <button className={s.btn}>read more <FaLongArrowAltRight/></button>
                    </div>
                </div>
            </div>

            <div className={s.img}>
                <img src={photo1} alt=""/>
            </div>

        </div>


        <div className={s.services}>

            <h2 className={s.provide}>services we provide</h2>

            <p className={s.textc}>
                Volutpat wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo <br/>
                consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu <br/>
                feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent <br/>
            </p>

            <div className={s.blocks}>

            <div className={s.block}>
                <RiTeamFill size={30} color={"#7b6c63"}/>
                <h4>CONSULTANCY</h4>
                <p className={s.text4}>
                    Claritas est etiam processus dynaicus qui <br/>
                    sequitur mutationem consuetudium <br/>
                    lectorum. Mirum est notare quam
                </p>
            </div>

            <div className={s.block}>
                <HiOutlineSpeakerphone  size={30} color={"#7b6c63"}/>
                <h4>MARKETING</h4>
                <p className={s.text4}>
                    Claritas est etiam processus dynaicus qui <br/>
                    sequitur mutationem consuetudium <br/>
                    lectorum. Mirum est notare quam
                </p>
            </div>

            <div className={s.block}>
                <FaFlask size={30} color={"#7b6c63"}/>
                <h4>REASERCH</h4>
                <p className={s.text4}>
                    Claritas est etiam processus dynaicus qui <br/>
                    sequitur mutationem consuetudium <br/>
                    lectorum. Mirum est notare quam
                </p>
            </div>

            </div>




            <div className={s.group}>

                <h3 className={s.skills}>our skills</h3>

                <div className={s.percents}>

                <div className={s.percent}>
                            <div className={s.countup}>
                    <CountUp end={85} suffix={"%"} duration={10}/>
                            </div>


                    <div className={s.span}>
                        Marketing
                    </div>

                </div>

                <div className={s.percent}>

                    <div className={s.countup}>
                        <CountUp end={85} suffix={"%"} duration={10}/>
                    </div>

                    <div className={s.span}>

                        Reaserch
                    </div>

                </div>

                <div className={s.percent}>

                    <div className={s.countup}>
                        <CountUp end={85} suffix={"%"} duration={10}/>
                    </div>

                    <div className={s.span}>
                        Management

                    </div>

                </div>

                <div className={s.percent}>

                    <div className={s.countup}>
                        <CountUp end={85} suffix={"%"} duration={10}/>
                    </div>

                    <div className={s.span}>
                        Consultancy

                    </div>

                </div>

                <div className={s.percent}>

                    <div className={s.countup}>
                        <CountUp end={85} suffix={"%"} duration={10}/>
                    </div>

                    <div className={s.span}>
                        Promotion

                    </div>

                </div>

                </div>


            </div>

        </div>

    </div>
}

export default About;