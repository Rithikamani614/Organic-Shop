import { Outlet } from 'react-router-dom'; 
import Section10  from './Section10';
import Footer from './Footer';

function Services(){
    return(
        <div>
           <Section10/>
           <Footer/>
           <Outlet/>
        </div>
    )
}
export default Services;