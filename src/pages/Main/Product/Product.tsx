import React, {memo, useEffect} from 'react'
import { IProduct } from 'pages/Main/Product/types'
import Isotope from 'isotope-layout'
import {ISOTOPE_CONTAINER, ISOTOPE_SELECTOR} from './constants'
import imagesLoaded from 'imagesloaded'

export const Product = memo(({ imagePath, url, title, subtitle }: IProduct) => {
  const isotope = React.useRef<Isotope | null>()

  useEffect(() => {
    imagesLoaded(ISOTOPE_CONTAINER, () => {
      isotope.current = new Isotope(ISOTOPE_CONTAINER, {
        itemSelector: ISOTOPE_SELECTOR,
        percentPosition: true,
        masonry: {
          columnWidth: ISOTOPE_SELECTOR
        }
      })
    })

    return () => isotope?.current?.destroy();
  }, [])

  return (
    <div className="single-products-catagory clearfix">
      <a href={url}>
        <img src={imagePath} alt="" />
        <div className="hover-content">
          <div className="line" />
          <p>{title}</p>
          <h4>{subtitle}</h4>
        </div>
      </a>
    </div>
  )
})
