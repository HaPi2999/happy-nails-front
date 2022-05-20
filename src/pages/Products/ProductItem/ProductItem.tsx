import {memo} from 'react'
import {Ratings} from 'components/UI/Ratings'

export const ProductItem = memo(() => {
    return (
        <div className="single-product-wrapper">
            <div className="product-img">
                <img src="/images/product-img/product3.jpg" alt=""/>
                <img className="hover-img" src="/images/product-img/product4.jpg" alt=""/>
            </div>
            <div
                className="product-description d-flex align-items-center justify-content-between">
                <div className="product-meta-data">
                    <div className="line"/>
                    <p className="product-price">$180</p>
                    <a href="product-details.html">
                        <h6>Modern Chair</h6>
                    </a>
                </div>
                <div className="ratings-cart text-right">
                    <Ratings ratings={4} />
                    <div className="cart">
                        <a
                            href="cart.html"
                            data-toggle="tooltip"
                            data-placement="left"
                            title="Add to Cart">
                            <img src="/images/core-img/cart.png" alt=""/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
})