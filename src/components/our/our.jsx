import  React from "react"
import s from "./our.module.css"
import {AiOutlineMinus} from "react-icons/all";
import img7 from "../../images/img7.png"
import bigline from "../../images/bigline.png"


const Our = () =>{

    return <div className={s.our}>


        <div className={s.fdiv}>
            <h1 className={s.ftitle}>our blog</h1>
            <AiOutlineMinus size={70} color={"#7b6c63"}/> <br/>
            <span className={s.text1}>Nam liber tempor cum soluta nobis eleifend option <br/>
            congue nihil imperdiet doming id quod mazim
</span>
        </div>

        <div className={s.sections}>


        <div className={s.section1}>
                <div className={s.photo}>
            <img src={img7} alt=""/>
                </div>
            <p className={s.march}>20 March 2014</p>

            <h3 className={s.title}>Typi non habent claritatem insitam</h3>

            <p className={s.text}>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit <br/>
                esse molestie consequat, vel illum dolore eu feugiat nulla <br/>
                facilisis at vero eros et accumsan et iusto odio dignissim qui [...] <br/>
            </p>

            <div className={s.photo}>

                <img src={img7} alt=""/>

            </div>

        </div>




            <div className={s.section2}>

                    <div className={s.photo3}>
                <img src={bigline} alt="bigline"/>
                        <div className={s.post}>
                           All <br/> Post
                        </div>
                    </div>

            </div>





        <div className={s.section3}>

            <p className={s.april}>10 April 2014</p>

            <h3 className={s.title2}>Typi non habent claritatem insitam</h3>

            <p className={s.text2}>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit <br/>
                esse molestie consequat, vel illum dolore eu feugiat nulla <br/>
                facilisis at vero eros et accumsan et iusto odio dignissim qui [...] <br/>
            </p>

            <div className={s.photo2}>
                <img src={img7} alt=""/>
            </div>

            <p className={s.april}>10 January 2014</p>

            <h3 className={s.title2}>Typi non habent claritatem insitam</h3>

            <p className={s.text2}>
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit <br/>
                esse molestie consequat, vel illum dolore eu feugiat nulla <br/>
                facilisis at vero eros et accumsan et iusto odio dignissim qui [...] <br/>
            </p>

        </div>

        </div>


    </div>
}

export  default Our;
