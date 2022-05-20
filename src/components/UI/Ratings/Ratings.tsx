import React, {memo} from 'react'
import {IRatings} from './types'

export const Ratings = memo(({ratings}: IRatings) => (
        <div className="ratings">
            {
                Array.from(
                    Array(ratings).keys())
                    .map((_, index) =>
                        <i key={index} className="fa fa-star" aria-hidden="true"/>
                    )
            }
        </div>
    )
)
