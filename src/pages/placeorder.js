import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../components/PlaceOrder';
import Navbar from '../components/PlaceOrder/Navbar';

const PlaceOrder = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const fetchProducts = async () => {
        const { data } = await axios.get('http://127.0.0.1:8000/api/product/');
        
        setProducts(data)
    }

    const fetchCart = async () => {
        const cart = await axios.get('http://127.0.');

        setCart(cart)
    }

    const handleAddToCart = async (productId, quantity) => {
        const item = await axios.post('http://127.0')

        setCart(item.cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    console.log(cart);

    return (
        <>
            <Navbar />
            <Products products={products} onAddToCart={handleAddToCart} /> 
        </>
    )
}

export default PlaceOrder
