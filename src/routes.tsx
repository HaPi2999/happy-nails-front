import { IRoute } from 'interfaces/IRoute'
import React from 'react'

const Main = React.lazy(() => import('pages/Main'))
const Products = React.lazy(() => import('pages/Products'))
const Product = React.lazy(() => import('pages/Product'))
const Cart = React.lazy(() => import('pages/Cart'))
const Checkout = React.lazy(() => import('pages/Checkout'))

export const ROUTES: IRoute[] = [
  {
    path: '/',
    component: <Main />,
  },
  {
    path: '/products',
    component: <Products />,
  },
  {
    path: '/product',
    component: <Product />,
  },
  {
    path: '/cart',
    component: <Cart />
  },
  {
    path: '/checkout',
    component: <Checkout />
  }
]
