import Section8 from './Section8';
import Footer from './Footer'
import { Outlet } from 'react-router-dom'; 


function About(){
    return(
        <div>
           <Section8/>
           <Footer/> 
           <Outlet/>
        </div>
    )
}
export default About;