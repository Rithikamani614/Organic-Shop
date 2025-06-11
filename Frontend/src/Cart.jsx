
// import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

export default function CartItems({ cartItems, setCartItems }) {
    const increaseQty = (item) => {
        if (item.product.stock === item.qty) return;
        setCartItems(cartItems.map(i =>
            i.product._id === item.product._id ? { ...i, qty: i.qty + 1 } : i
        ));
    };

    const decreaseQty = (item) => {
        if (item.qty > 1) {
            setCartItems(cartItems.map(i =>
                i.product._id === item.product._id ? { ...i, qty: i.qty - 1 } : i
            ));
        }
    };

   function removeItem(item) {
  const confirmRemove = window.confirm("Are you sure you want to remove this item?");
    if (confirmRemove) {
        const updatedItems = cartItems.filter((i) => i.product._id !== item.product._id);
        setCartItems(updatedItems);
    }
}

    return (
        <div className="cart-container">
            {cartItems.length > 0 ? (
                <table className="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                       <tbody>
                    {[...cartItems].reverse().map(item => (
                        <tr key={item.product._id}>
                        <td>
                            <img
                            src={item.product.images[0]?.image}
                            alt={item.product.name}
                            className="product-image"
                            />
                        </td>
                        <td>
                            <Link to={`/product/${item.product._id}`} className="product-link">
                            {item.product.name}
                            </Link>
                        </td>
                        <td>${item.product.price.toFixed(2)}</td>
                        <td>
                            <div className="qty-controls">
                            <button onClick={() => decreaseQty(item)} >-</button>
                            <input type="text" value={item.qty} readOnly />
                            <button onClick={() => increaseQty(item)}>+</button>
                            </div>
                        </td>
                        <td>${(item.product.price * item.qty).toFixed(2)}</td>
                        <td>
                            <FaTrash onClick={() => removeItem(item)} className="remove-icon" />
                        </td>
                        </tr>
                    ))}
                    </tbody>

                </table>
            ) : (
                <h2 className="empty-message">Your Cart is Empty!</h2>
            )}
        </div>
    );
}










 