import {memo} from 'react'
import {Ratings} from 'components/UI/Ratings'

export const Product = memo(() => {

    const images = [
        '/images/product-img/pro-big-1.jpg',
        '/images/product-img/pro-big-2.jpg',
        '/images/product-img/pro-big-3.jpg',
        '/images/product-img/pro-big-4.jpg'
    ]

    return (
        <div className="main-content-wrapper d-flex clearfix">
            <div className="single-product-area clearfix">
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-12">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mt-50">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Furniture</a></li>
                                    <li className="breadcrumb-item"><a href="#">Chairs</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">white modern chair</li>
                                </ol>
                            </nav>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <div className="single_product_thumb">
                                <div
                                    id="product_details_slider"
                                    className="carousel slide"
                                    data-ride="carousel"
                                >
                                    <ol className="carousel-indicators">
                                        {images && images.map((item, index) => (
                                            <li
                                                className="active"
                                                data-target="#product_details_slider"
                                                data-slide-to={index}
                                                style={{backgroundImage: `url(${item})`}}>
                                            </li>
                                        ))}
                                    </ol>
                                    <div className="carousel-inner">
                                        {images && images.map((item, index) => (
                                            <div className={index === 0 ? 'carousel-item active' : 'carousel-item'}>
                                                <a className="gallery_img" href={item}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={item}
                                                        alt="First slide"/>
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-5">
                            <div className="single_product_desc">
                                <div className="product-meta-data">
                                    <div className="line"/>
                                    <p className="product-price">$180</p>
                                    <a href="product-details.html">
                                        <h6>White Modern Chair</h6>
                                    </a>
                                    <div
                                        className="ratings-review mb-15 d-flex align-items-center justify-content-between">
                                        <Ratings ratings={4}/>
                                        <div className="review">
                                            <a href="#">Write A Review</a>
                                        </div>
                                    </div>
                                    <p className="avaibility">
                                        <i className="fa fa-circle"/> In Stock
                                    </p>
                                </div>

                                <div className="short_overview my-5">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quae eveniet
                                        culpa officia quidem mollitia impedit iste asperiores nisi reprehenderit
                                        consequatur, autem, nostrum pariatur enim?</p>
                                </div>
                                <form className="cart clearfix" method="post">
                                    <div className="cart-btn d-flex mb-50">
                                        <p>Qty</p>
                                        <div className="quantity">
                                            <input type="number" className="qty-text" id="qty" step="1" min="1"
                                                   max="300" name="quantity" value="1"/>
                                        </div>
                                    </div>
                                    <button type="submit" name="addtocart" value="5" className="btn amado-btn">Add to
                                        cart
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
})