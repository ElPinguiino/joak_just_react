import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/index';
import useStyles from './PlaceOrderElements';

const Products = ({ products, onAddToCart }) => {

    // const [products, setProducts] = useState([]);
    // const [cart, setCart] = useState({});

    // const getProducts = async () => {
    //     const {data} = await axios.get('http://127.0.0.1:8000/api/product/')
    //     setProducts(data)
    // }

    // useEffect(() => {
    //     getProducts();
    // }, []);

    // console.log(products)

    const classes = useStyles();

        return (
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container justify="center" spacing={4}>
                    {products.map((product) => (
                        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart} />
                        </Grid>
                    ))}
                </Grid>
            </main>
        )
}

export default Products;
