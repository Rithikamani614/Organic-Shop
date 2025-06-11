import { Link, useNavigate } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import { 
  FaTachometerAlt, 
  FaProductHunt, 
  FaShoppingBasket, 
  FaPlus, 
  FaUsers 
} from 'react-icons/fa';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/admin/dashboard">
              <FaTachometerAlt /> Dashboard
            </Link>
          </li>

          <li>
            <NavDropdown
              title={
                <span><FaProductHunt /> Product</span>
              }
            >
              <NavDropdown.Item onClick={() => navigate('/admin/products')}>
                <FaShoppingBasket /> All
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => navigate('/admin/products/create')}>
                <FaPlus /> Create
              </NavDropdown.Item>
            </NavDropdown>
          </li>

          <li>
            <Link to="/admin/orders">
              <FaShoppingBasket /> Orders
            </Link>
          </li>

          <li>
            <Link to="/admin/users">
              <FaUsers /> Users
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
