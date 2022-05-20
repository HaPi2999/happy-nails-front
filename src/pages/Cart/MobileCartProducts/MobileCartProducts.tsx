import React, {memo} from 'react'
import {Link} from 'react-router-dom'

export const MobileCartProducts = memo(() => {
    return (
        <>
            {
                [1,2,3,4].map((item, index) => (
                    <div key={index} className="cart-item">
                        <div className="product-container">
                            <div className="product-container1">
                                <div className="image-container">
                                    <div className="image-container1">
                                        <div className="image">
                                            <Link to="/">
                                                <img src="/images/product-img/product3.jpg" alt=""/>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="info">
                                <div>Cosmolack <span>/ Лаки</span></div>
                                <div>
                                    Цвет -
                                    <b>31/L32</b>
                                </div>
                                <div className="price">
                                    <span className="old">10000 ₽</span>
                                    <span>9782 ₽</span>
                                </div>
                            </div>
                        </div>
                        <div className="actions">
                            <div className="add-and-remove">
                                <i className="fa fa-plus"/>
                                <span>3 шт.</span>
                                <i className="fa fa-minus"/>
                            </div>
                            <div className="favorite">
                                <i className="fa fa-heart-o"/>
                            </div>
                            <div className="favorite">
                                <i className="fa fa-trash"/>
                            </div>
                        </div>

                    </div>
                ))
            }
        </>
    )
})