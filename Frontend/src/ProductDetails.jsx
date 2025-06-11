
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { toast } from 'react-toastify';

export default function ProductDetail({ cartItems, setCartItems }) {
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const { id } = useParams();

    // useEffect(() => {
    //     fetch(process.env.REACT_APP_API_URL + '/product/' + id)
    //         .then(res => res.json())
    //         .then(res => {
    //             setProduct(res.product);

    //             // Sync local qty if item is already in cart
    //             const itemInCart = cartItems.find(item => item.product._id === res.product._id);
    //             if (itemInCart) {
    //                 setQty(itemInCart.qty);
    //             }
    //         });
    // }, [id, cartItems]);




    useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/product/' + id)
        .then(res => res.json())
        .then(res => {
            console.log('Product response:', res);
            if (res.product) {
                setProduct(res.product);
                const itemInCart = cartItems.find(item => item.product._id === res.product._id);
                if (itemInCart) {
                    setQty(itemInCart.qty);
                }
            } else {
                toast.error("Product not found");
            }
        })
        .catch(err => {
            console.error("Fetch error:", err);
            toast.error("Failed to load product");
        });
}, [id, cartItems]);

    function addToCart() {
        const itemExist = cartItems.find(item => item.product._id === product._id);
        if (!itemExist) {
            const newItem = { product, qty: 1 };
            setCartItems(state => [...state, newItem]);
            setQty(1);
            toast.success("Item added to cart!");
        } else {
            toast.info("Item is already in the cart.");
        }
    }

    function increaseQty() {
        const itemExist = cartItems.find(item => item.product._id === product._id);
        if (itemExist) {
            if (itemExist.qty >= product.stock) return;
            setCartItems(state =>
                state.map(item =>
                    item.product._id === product._id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                )
            );
            setQty(qty + 1);
        }
    }
function decreaseQty() {
    const itemExist = cartItems.find(item => item.product._id === product._id);
    if (itemExist && itemExist.qty > 1) {
        setCartItems(state =>
            state.map(item =>
                item.product._id === product._id
                    ? { ...item, qty: item.qty - 1 }
                    : item
            )
        );
        setQty(qty - 1);
    } else {
        // toast.warning("Minimum quantity is 1");
    }
}

    return product && (
        <div className='cartbg'>
            <div className="container container-fluid productdetail">
                <div className="row f-flex justify-content-around">
                    <div className="col-12 col-lg-5 img-fluid" id="product_image">
                        <img src={product.images[0].image} alt={product.name} height="500" width="500" />
                    </div>

                    <div className="col-12 col-lg-5 mt-5">
                        <h3>{product.name}</h3>
                        <p id="product_id">Product #{product._id}</p>

                        <hr className='my-4' />

                        <div className="rating-outer">
                            <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}>
                                <ul className='sec5ul'>
                                    {[...Array(5)].map((_, i) => <li key={i}><FaStar /></li>)}
                                </ul>
                            </div>
                        </div>

                        <hr className='my-4' />
                        <p id="product_price">${product.price}.00</p>

                        <div className="stockCounter d-inline">
                            <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                            <input type="number" className="form-control d-inline cartinput" value={qty} readOnly />
                            <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                        </div>

                        <button
                            type="button"
                            onClick={addToCart}
                            disabled={product.stock === 0 || cartItems.find(i => i.product._id === product._id)}
                            id="cart_btn"
                            className="btn d-inline ml-4 probtn"
                        >
                            Add to Cart
                        </button>

                        <hr className='my-4' />
                        <p>Status: <span id="stock_status" className={product.stock > 0 ? 'text-success' : 'text-danger'}>
                            {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                        </span></p>

                        <hr className='my-4' />
                        <h4 className="mt-2">Description:</h4>
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}



