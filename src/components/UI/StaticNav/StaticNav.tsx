import React, {memo, useEffect, useRef, useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {pageType} from 'atoms/App/page'
import {PAGES} from 'atoms/App/constants'
import {NAV_PAGES} from './constants'

export const StaticNav = memo(() => {
    const [currentPage, setCurrentPage] = useRecoilState(pageType)
    const [opened, setOpened] = useState(true)
    const ref = useRef<HTMLDivElement | null>(null);

    const location = useLocation()

    useEffect(() => {
        const onClick = (e: any) => {
            if (ref.current !== null && !ref.current.contains(e.target)) {
                setOpened(false)
            }
        }
        document.addEventListener('click', onClick);
        return () => document.removeEventListener('click', onClick);
    }, []);

    const getClasses = (type: PAGES , classes: string) =>
        currentPage === type
            ? `${classes} active`
            : classes

    const handleChange = (type: PAGES) => () => setCurrentPage(type)

    const handleOpen = (isOpened: boolean) => () => setOpened(isOpened)

    if (location.pathname === '/') {
        return null
    }

    return (
        <>
            <div className="open-hide-nav" onMouseEnter={handleOpen(true)}>
                { opened && <i className="fa fa-angle-left" aria-hidden="true"/> }
                { !opened && <i className="fa fa-angle-right" aria-hidden="true"/> }
            </div>
            <div id="static-nav" ref={ref} className={!opened ? 'hide-static-nav' : ''} onMouseLeave={handleOpen(false)}>
                { NAV_PAGES.map((page, index) => (
                    <Link key={index} to={page.link} title={page.title}>
                        <i
                            className={getClasses(page.type, page.classes)}
                            onClick={handleChange(page.type)}
                            aria-hidden="true"
                        />
                    </Link>
                )) }
            </div>
        </>
    )
})