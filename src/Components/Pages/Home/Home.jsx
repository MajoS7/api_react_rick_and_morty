import { Header } from "../../Layouts/Header/Header";
import { Main } from "../../Layouts/Main/Main";
import { Footer } from "../../Layouts/Footer/Footer";
import './Home.css';

export const Home =() =>{
    return(
        <div className="ContainerPrincipal">
            <Header/>
            <Main/>
            {/*<Footer/> */}
        </div>
    )

}
