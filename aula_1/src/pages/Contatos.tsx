import Logo from "../componentes/Img/moca.png"
import "./Contatos.css";
import React from "react";
export const Contatos = () => {
 
    return(
        <>
        <br /><br /><br />
        <div className='Logo'>
         <img src={Logo} alt="Logo" width="150"   />
        </div>
          <form>
            <br /><br /><br /><br /><br /><br /> <br /><br /><br />
            <label>Nome: </label>
                <input 
                type="text" 
                name="fname"
             
                
                />
        </form>

        <form>
        <label> Telefone:</label>
                <input 
                type="number" 
                name="name"
                />
        </form>
         
        <form>
        <label>  Email: </label>
                <input 
                type="text" 
                name="fname"
                />
        </form>
        <form>
        <label> Senha: </label>
                <input 
                type="number" 
                name="name"
                
                />
                <form>
    <button type="submit">Cuida  envia!</button>
   
</form>
        </form>
        

        
  
  
       
        </>
    );
};