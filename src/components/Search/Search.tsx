import React, { memo } from 'react'

export const Search = memo(() => {
  return (
    <div className="search-wrapper section-padding-100">
      <div className="search-close">
        <i className="fa fa-close" aria-hidden="true" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="search-content">
              <form action="#" method="get">
                <input
                  type="search"
                  name="search"
                  id="search"
                  placeholder="Type your keyword..."
                />
                <button type="submit">
                  <img src="/images/core-img/search.png" alt="" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
