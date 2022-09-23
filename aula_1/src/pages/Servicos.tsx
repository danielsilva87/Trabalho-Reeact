import Html from "../componentes/Img/html2.png"
import Css from "../componentes/Img/css.png"
import Php from "../componentes/Img/php.png"
import Phyton from "../componentes/Img/phyton.png"
import Sql from "../componentes/Img/sql.png"
import Js from "../componentes/Img/js.png"
import Portugol from "../componentes/Img/p2.png"
import Rc from "../componentes/Img/react.png"
import "./Servicos.css";
import React, {useState} from "react";
export const Servicos = () => {



    return(
        <>
         <br /><br />
        <h1>LINGUAGENS DE PROGRAMAÇÃO</h1>
        <br /><br /><br />
        <div className='Portugol'>
         <img src={Portugol} alt="Portugol" width="150"  text-align="center"/>
         <img src={Js} alt="Js" width="150"  text-align="center"/>
         <img src={Sql} alt="Sql" width="230"  text-align="center"/>
         <img src={Phyton} alt="Phyton" width="230"  text-align="center"/>
         <img src={Rc} alt="Rc" width="230"  text-align="center"/>
         <img src={Php} alt="Php" width="230"text-align="center"/>
         <img src={Css} alt="Css" width="230"text-align="center"/>
         <img src={Html} alt="Html" width="230"text-align="center"/>
         
         
         
        </div>

        </>
    );
};