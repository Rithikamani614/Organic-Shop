import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Footer from './Footer';
import { Outlet } from 'react-router-dom'; 

function Home(){
    return(
        <div>
            <Section1/>
            <Section2/>
            <Section3/>
            <Section4/>
            <Section5/>
            <Section6/>
            <Section7/>
            <Footer/>  
           <Outlet/>
        </div>
    )
}
export default Home;