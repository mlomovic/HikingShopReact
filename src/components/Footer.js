import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <article className="container">
                <h3>
                    <a className="logo" href="index.html"><i className="fas fa-hiking"></i>Hiking shop</a>
                </h3>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="products">Products</Link>
                        </li>
                        <li>
                            <Link to="about">About us</Link>
                        </li>
                        <li>
                            <Link to="contact">Contact us</Link>
                        </li>
                        <li>
                            <Link to="cart">Cart</Link>
                        </li>
                        <li>
                            <Link to="admin">Admin</Link>
                        </li>
                    </ul>
                </nav>
                <div className="icons">
                    <span><a href=""><i className="fab fa-facebook-square"></i></a></span>
                    <span><a href=""><i className="fab fa-instagram"></i></a></span>
                    <span><a href=""><i className="fab fa-twitter"></i></a></span>
                    <span><a href=""><i className="fab fa-pinterest"></i></a></span>
                </div>
            </article>
            <article>
                <p>&copy; Hiking shop 2021.</p>
            </article>
        </footer>
    )
}

export default Footer