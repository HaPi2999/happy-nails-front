import {PAGES} from 'atoms/App/constants'

export const NAV_PAGES = [
    {
        classes: 'fa fa-home circle main',
        link: '/',
        type: PAGES.HOME,
        title: 'Home',
        active: true
    },
    {
        classes: 'fa fa-shopping-bag circle',
        link: '/products',
        type: PAGES.SHOP,
        title: 'Каталог'
    },
    {
        classes: 'fa fa-shopping-cart circle',
        link: '/cart',
        type: PAGES.CART,
        title: 'Корзина'
    },
    {
        classes: 'fa fa-paypal circle',
        link: '/checkout',
        type: PAGES.CHECKOUT,
        title: 'Корзина'
    },
    {
        classes: 'fa fa-newspaper-o circle',
        link: '/news',
        type: PAGES.NEWS,
        title: 'Новости'
    }
]