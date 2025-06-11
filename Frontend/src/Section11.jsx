import { Link } from "react-router-dom";
function Section11(){
    return(
        <div className="section11">
            <div className='sec8bg'>
             <h1 className='sec8h1'>Shop</h1>
             <ul className='sec8ul'>
                <li className='sec8li1'>
                <Link to='/'  style={{ color: '#f8ca38' ,textDecoration:'none'}} className='link'>Home</Link>
                </li>
                <li>products</li>
             </ul>
            </div>

        </div>
    )
}
export default Section11;