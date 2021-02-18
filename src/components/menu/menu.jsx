import React,{useContext, useState} from "react"
import s from "./menu.module.css"
import logo from "../../images/logo.png"
import {menuContext} from "../../state/state";
import { NavLink } from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/all";



const Menu = () =>{

    const menu = useContext(menuContext)

    const [show,setShow]=useState(false)

    const click= () =>{
        setShow(!show)
    }



    const isMobile = useMediaQuery({ maxWidth: 1090 })


    return  <div className={s.main}>

        <div className={s.center}>
<div className={s.logo}>
   <NavLink to="/">
       <img src={logo} alt="logo"/>
   </NavLink>
</div>

            <div>

                {(isMobile) && <div className={s.icon}
                                    onClick={click}>
                    {!show ? <AiOutlineMenu color="red" size={30}/>
                        : <AiOutlineClose color="red" size={30}/>}
                </div>}

                {(!isMobile || show) &&

        <nav className={s.nav}>

            <ul className={s.menu}>
                {menu.map(m=>{
                    return <li key={m.id}>
                        <NavLink
                            to={`/${m.name}`}
                            className={s.link}
                            activeClassName={s.active}

                            >
                        {m.name}
                        </NavLink>
                    </li>
                })}
            </ul>
        </nav>}
            </div>
        </div>

    </div>
}

export default Menu;