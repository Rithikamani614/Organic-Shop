import Section13 from './Section13';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; 

function Contact(){
    return(
        <div>
           <Section13/>
           <Footer/> 
           <Outlet/>
        </div>
    )
}
export default Contact;