
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FaTrash } from 'react-icons/fa';

export default function OrderSummary({ cartItems = [], setCartItems }) {
    const [complete, setComplete] = useState(false);

    function increaseQty(item) {
        if (item.product.stock === item.qty) return;
        const updatedItems = cartItems.map((i) =>
            i.product._id === item.product._id ? { ...i, qty: i.qty + 1 } : i
        );
        setCartItems(updatedItems);
    }

    function decreaseQty(item) {
        if (item.qty > 1) {
            const updatedItems = cartItems.map((i) =>
                i.product._id === item.product._id ? { ...i, qty: i.qty - 1 } : i
            );
            setCartItems(updatedItems);
        }
    }

    function removeItem(item) {
  const confirmRemove = window.confirm("Are you sure you want to remove this item?");
    if (confirmRemove) {
        const updatedItems = cartItems.filter((i) => i.product._id !== item.product._id);
        setCartItems(updatedItems);
    }
}

function placeOrderHandler() {
    const orderPayload = cartItems.map(item => ({
        product: { _id: item.product._id },
        qty: item.qty
    }));

    fetch(`${process.env.REACT_APP_API_URL}/order`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload),
    })
        .then((res) => {
            if (!res.ok) throw new Error('Failed');
            return res.json();
        })
        .then(() => {
            setCartItems([]);
            setComplete(true);
            toast.success('Order Success!');
        })
        .catch(() => {
            toast.error('Failed to place order.');
        });
}


    if (cartItems.length === 0 && !complete) {
        return <h2 className="mt-5 text-center">Your Cart is Empty!</h2>;
    }

    if (complete) {
        return (
            <Fragment>
                <h2 className="mt-5 text-center">Order Complete!</h2>
                <p className="text-center">Your order has been placed successfully.</p>
            </Fragment>
        );
    }

    const totalQty = cartItems.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.product.price * item.qty, 0);

    return (
        <Fragment>
            <div className="container container-fluid">
                <h2 className="mt-5 mb-4">Order Summary:</h2>
                <div className="row d-flex justify-content-between">
                    {/* Cart Table */}
                    <div className="col-12 col-lg-8">
                        <table className="table table-bordered cart-table">
                            <thead className="thead-light">
                                <tr>
                                    <th>Image</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                                 {[...cartItems].reverse().map((item) =>  (
                                    <tr key={item.product._id}>
                                        <td>
                                            <img
                                                src={item.product.images[0]?.image}
                                                alt={item.product.name}
                                                height="80"
                                                width="80"
                                                className="img-fluid"
                                            />
                                        </td>
                                        <td>
                                            <Link to={`/product/${item.product._id}`}>
                                                {item.product.name}
                                            </Link>
                                        </td>
                                        <td>${item.product.price.toFixed(2)}</td>
                                        <td>
                                            <div className="stockCounter d-flex align-items-center justify-content-center">
                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() => decreaseQty(item)}
                                                >
                                                    -
                                                </button>
                                                <input
                                                    type="number"
                                                    className="form-control mx-2 text-center"
                                                    value={item.qty}
                                                    readOnly
                                                    style={{ width: '60px' }}
                                                />
                                                <button
                                                    className="btn btn-sm btn-primary"
                                                    onClick={() => increaseQty(item)}
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <FaTrash
                                                onClick={() => removeItem(item)}
                                                className="text-danger"
                                                style={{ cursor: 'pointer', fontSize: '18px' }}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Order Summary */}
                    <div className="col-12 col-lg-3 ">
                        <div id="order_summary">
                                <h4 className="mb-3 text-center"> Your Order</h4>
                                <hr />
                                <p>
                                    <strong>Items in Cart:</strong>{' '}
                                    <span className="order-summary-values">{totalQty} item{totalQty > 1 ? 's' : ''}</span>
                                </p>
                                <p>
                                    <strong>Total Amount:</strong>{' '}
                                    <span className="order-summary-values">${totalPrice.toFixed(2)}</span>
                                </p>
                            <hr />
                            <button
                                id="checkout_btn"
                                onClick={placeOrderHandler}
                                className="btn btn-primary btn-block"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to="/products" className="continuebtn1 btn mt-3">
                 Continue Shopping
                </Link>
                </div>
            </div>
        </Fragment>
    );
}
