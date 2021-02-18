import  {createContext} from "react";



const state = {

   menu: [

       {id:1,name:"home"},
       {id:2,name:"about"},
       {id:3,name:"portfolios"},
       {id:4,name:"team"},
       {id:5,name:"our"},
       {id:6,name:"contact"}

        ]

}

export const menuContext = createContext(state.menu)
