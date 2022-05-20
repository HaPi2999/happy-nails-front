import {memo} from 'react'
import {MediaQuery, useMediaQuery} from 'react-responsive'
import {DesktopCartProducts} from 'pages/Cart/DesktopCartProducts'
import {MobileCartProducts} from 'pages/Cart/MobileCartProducts'

export const Cart = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 577px)'
    })

    console.log(isMobile)

    return (
        <div className="main-content-wrapper d-flex clearfix">
            <div className="cart-table-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="cart-title mt-50">
                                <h2>Shopping Cart</h2>
                            </div>

                            <div className="cart-table clearfix">
                                { !isMobile && <DesktopCartProducts /> }
                                { isMobile && <MobileCartProducts /> }
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="cart-summary">
                                <h5>Cart Total</h5>
                                <ul className="summary-table">
                                    <li><span>subtotal:</span> <span>$140.00</span></li>
                                    <li><span>delivery:</span> <span>Free</span></li>
                                    <li><span>total:</span> <span>$140.00</span></li>
                                </ul>
                                <div className="cart-btn mt-100">
                                    <a href="cart.html" className="btn amado-btn w-100">Checkout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}