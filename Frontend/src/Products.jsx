import { Outlet } from 'react-router-dom'; 
import Section11  from './Section11';
import Section5 from './Section5';
import Footer from './Footer';

function Products(){
    return(
        <div>
            <Section11/>
            <Section5/>
            <Footer/>
            <Outlet/>
        </div>
    )
}
export default Products;