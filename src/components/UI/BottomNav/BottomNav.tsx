import React, {memo} from 'react'
import {NAV_PAGES} from 'components/UI/StaticNav/constants'
import {useRecoilState} from 'recoil'
import {pageType} from 'atoms/App/page'
import {PAGES} from 'atoms/App/constants'
import {Link} from 'react-router-dom'

export const BottomNav = memo(() => {
    const [currentPage, setCurrentPage] = useRecoilState(pageType)

    const getClasses = (type: PAGES, classes: string = '') =>
        currentPage === type
            ? `${classes} active-nav-item`
            : classes

    const handleChange = (type: PAGES) => () => setCurrentPage(type)

    return (
        <div id="bottom-nav">
            {NAV_PAGES.map((page, index) => (
                <div key={index} className="nav-item" onClick={handleChange(page.type)}>
                    <Link to={page.link}>
                        <div className="icon">
                            <i
                                className={getClasses(page.type, page.classes)}
                                aria-hidden="true"
                            />
                        </div>
                        <span className={getClasses(page.type)}>{page.title}</span>
                    </Link>
                </div>
            ))}
        </div>
    )
})