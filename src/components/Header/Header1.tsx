import React, {memo} from 'react'
import {Link} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {pageType} from 'atoms/App/page'
import {PAGES} from 'atoms/App/constants'
import {NAV_PAGES} from 'components/UI/StaticNav/constants'

export const Header1 = memo(() => {
    const [currentPage, setCurrentPage] = useRecoilState(pageType)

    const handleChangePage = (type: PAGES) => ()  => setCurrentPage(type)

    return (
        <header className="header-area clearfix">
            <div className="nav-close">
                <i className="fa fa-close" aria-hidden="true" />
            </div>
            <nav className="amado-nav">
                <ul>
                    { NAV_PAGES.map((page, index) => (
                        <li
                            key={index}
                            className={page.active ? 'active' : ''}
                            onClick={handleChangePage(page.type)}
                        >
                            <Link to={page.link}>
                                {page.title}
                            </Link>
                        </li>
                    )) }
                </ul>
            </nav>
            <div className="amado-btn-group mt-30 mb-100">
                <a href="#" className="btn amado-btn mb-15">
                    %Discount%
                </a>
                <a href="#" className="btn amado-btn active">
                    New this week
                </a>
            </div>
            <div className="cart-fav-search mb-100">
                <a href="cart.html" className="cart-nav">
                    <img src="/images/core-img/cart.png" alt="" />
                    Cart <span>(0)</span>
                </a>
                <a href="#" className="fav-nav">
                    <img src="/images/core-img/favorites.png" alt="" />
                    Favourite
                </a>
                <a href="#" className="search-nav">
                    <img src="/images/core-img/search.png" alt="" />
                    Search
                </a>
            </div>
            <div className="social-info d-flex justify-content-between">
                <a href="#">
                    <i className="fa fa-pinterest" aria-hidden="true" />
                </a>
                <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                </a>
                <a href="#">
                    <i className="fa fa-facebook" aria-hidden="true" />
                </a>
                <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                </a>
            </div>
        </header>
    )
})