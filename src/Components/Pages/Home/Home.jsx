import { Header } from "../../Layouts/Header/Header";
import { Select } from "../../Layouts/Select/Select";
import { AllCards } from "../../Layouts/AllCards/AllCards";
import { Footer } from "../../Layouts/Footer/Footer";

export const Home =() =>{
    return(
        <div>
            <Header/>
            <Select/>
            <AllCards/>
            <Footer/>
        </div>
    )

}
