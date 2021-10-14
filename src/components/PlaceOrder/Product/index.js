import React, { useState, useEffect } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './ProductElement';

const Product = ({ product, handleAddToCart }) => {
    const classes = useStyles();

    const [qty, setQty] = useState(1);

    const addToCartHandler = () =>{
        console.log('Add to cart')
    }

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.product_image} title={product.product_name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.product_name}
                    </Typography>
                    <Typography variant="h5">
                        ${product.product_price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Quantity" value={qty} onChange={(e) => setQty(e.target.value)}>
                    Amount
                </IconButton>
                <IconButton aria-label="Add to Cart" onClick={addToCartHandler}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product;