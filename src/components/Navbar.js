import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../context/CartContext';
import ProductsContext from '../context/ProductsContext';

const Navbar = () => {

    const { cart } = useContext(CartContext);
    const { products } = useContext(ProductsContext);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="products">Products <span>({products.length})</span></Link>
                </li>
                <li>
                    <Link to="about">About us</Link>
                </li>
                <li>
                    <Link to="contact">Contact us</Link>
                </li>
                <li>
                    <Link to="cart">Cart <span>({cart.length})</span></Link>
                </li>
                <li>
                    <Link to="admin">Admin</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar