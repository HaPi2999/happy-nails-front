import React, {FC, memo, useMemo, useState} from 'react'
import {IFilterItem} from 'components/FilterItem/types'

export const FilterItem: FC<IFilterItem> = memo(({title, additionalStyles, children}) => {
    const [showMore, setShowMore] = useState(false)

    const handlerShow = () => setShowMore(!showMore)

    const iconClasses = useMemo(() =>
            showMore ? 'fa fa-angle-up filter-icon' : 'fa fa-angle-down filter-icon',
        [showMore]
    )

    if (!showMore) {
        return (
            <div className={`widget mb-50 ${additionalStyles}`}>
                <div style={{display: 'flex'}}  onClick={handlerShow}>
                    <h6 className="widget-title mb-30">{title}</h6>
                    <i className={iconClasses} aria-hidden="true"/>
                </div>
            </div>
        )
    }

    return (
        <div className={`widget mb-50 ${additionalStyles}`}>
            <div style={{display: 'flex'}} onClick={handlerShow}>
                <h6 className="widget-title mb-30">{title}</h6>
                <i className={iconClasses} aria-hidden="true"/>
            </div>
            {children}
        </div>
    )
})