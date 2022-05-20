import React, {memo, useState} from 'react'
import {LeftPopUp} from 'components/UI/LeftPopUp'
import {Abc} from 'components/Header/Abc/Abc'

export const Header = memo(() => {
    const [opened, setOpened] = useState(false)

    const handleOpenPopUp = () => setOpened(!opened)

    return (
        <>
            <LeftPopUp setOpened={setOpened} opened={opened}/>
            <nav className="navbar navbar-light bg-light top-nav">
                <a className="navbar-brand" href="#">
                    <img src="/images/core-img/logo.png" width="100" height="100" alt=""/>
                </a>
                <div className="form-inline my-2 my-lg-0">
                    <div className="filter">
                        <i className="fa fa-filter header-nav" aria-hidden="true"/>
                    </div>
                    <div className="nav-user" onClick={handleOpenPopUp}>
                        <i className="fa fa-user-circle header-nav" aria-hidden="true"/>
                        <div className="user-info">
                            <span className="fio">Федяков Михаил</span>
                            <span className="city">89018533740 | Москва</span>
                        </div>
                    </div>
                </div>
            </nav>
            <div>
                <Abc/>
            </div>
        </>
    )
})