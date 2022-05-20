import {memo} from 'react'
import {Search} from 'components/Search'
import {ProductItem} from './ProductItem'
import {Pagination} from 'components/UI/Pagination'

export const Products = memo(() => {
    return (
        <>
            <Search/>
            <div className="main-content-wrapper d-flex clearfix">
                <div className="amado_product_area section-padding-40">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="product-topbar d-xl-flex align-items-end justify-content-between">
                                    <div className="product-sorting d-flex">
                                        <div className="sort-by-date d-flex align-items-center mr-15">
                                            <p>Sort by</p>
                                            <form action="#" method="get">
                                                <select name="select" id="sortBydate">
                                                    <option value="value">Date</option>
                                                    <option value="value">Newest</option>
                                                    <option value="value">Popular</option>
                                                </select>
                                            </form>
                                        </div>
                                        <div className="view-product d-flex align-items-center">
                                            <p>View</p>
                                            <form action="#" method="get">
                                                <select name="select" id="viewProduct">
                                                    <option value="value">12</option>
                                                    <option value="value">24</option>
                                                    <option value="value">48</option>
                                                    <option value="value">96</option>
                                                </select>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {
                                [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                                    <div key={index} className="col-12 col-sm-6 col-md-4 col-xl-3">
                                        <ProductItem/>
                                    </div>
                                ))
                            }
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <Pagination/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
})