import {memo} from 'react'

export const DesktopCartProducts = memo(() => {
    return (
        <table className="table table-responsive">
            <thead>
            <tr>
                <th/>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {[1, 2, 3, 4, 5].map((item, index) => (
                <tr key={index}>
                    <td className="cart_product_img">
                        <a href="#">
                            <img src="/images/bg-img/cart1.jpg" alt="Product"/>
                        </a>
                    </td>
                    <td className="cart_product_desc">
                        <h5>White Modern Chair</h5>
                    </td>
                    <td className="price">
                        <span>$130</span>
                    </td>
                    <td className="qty">
                        <div className="qty-btn d-flex">
                            <div className="quantity">
                                                    <span className="qty-minus">
                                                        <i className="fa fa-minus" aria-hidden="true"/>
                                                    </span>
                                <input type="number"
                                       className="qty-text"
                                       onChange={() => {
                                           return 2
                                       }}
                                       id="qty"
                                       step="1"
                                       min="1"
                                       max="300"
                                       name="quantity"
                                       value="1"
                                />
                                <span className="qty-plus">
                                                            <i className="fa fa-plus" aria-hidden="true"/>
                                                        </span>
                            </div>
                        </div>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    )
})