
import { Link } from "react-router-dom";
import "./style.css";
export const Menu= () => {
    return(
        <>
        <header>
          <h1>INFORSTECH</h1>
        <nav className= 'menu'>
            <ul>
                
              <li><Link to = "/Home">Home</Link></li>
              <li><Link to = "/Servicos">Servicos</Link></li>
              <li><Link to = "/Contatos">Contatos</Link></li>
           
              
              
               
            </ul>
       
        </nav>
        </header>
     

        
            
    
       </>
        
        
    )
};