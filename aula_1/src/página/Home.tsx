import { Card } from "../componentes/Card"
import { Footer } from "../componentes/Footer"
import { Menu } from "../componentes/Menu"


export const Home = () => {

    return(
        <>
        <Menu />
        <main>
        <h1>Página Home</h1>
        <p>UM T.I DA AFS</p>
        <Card/>
        <Footer/>
        </main>
        
        </>
    )
}