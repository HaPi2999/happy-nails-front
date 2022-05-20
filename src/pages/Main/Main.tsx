import React, {memo} from 'react'
import { Product } from './Product'
import {PRODUCTS} from './constants'
import {Header1} from 'components/Header'

export const Main = memo(() => {
  return (
    <>
      <div className="main-content-wrapper d-flex clearfix main-page">
        <Header1 />
        <div className="products-catagories-area clearfix">
          <div className="amado-pro-catagory clearfix">
            {PRODUCTS.map((product, index) => (
              <Product
                key={index}
                imagePath={product.imagePath}
                url={product.url}
                title={product.title}
                subtitle={product.subtitle}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
})
