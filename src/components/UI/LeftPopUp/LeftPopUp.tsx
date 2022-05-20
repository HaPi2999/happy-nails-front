import React, {memo} from 'react'
import {ILeftPopUp} from './types'

export const LeftPopUp = memo(({ opened, setOpened }: ILeftPopUp) => {
    const handlerOpen = (isOpened: boolean) => () => setOpened(isOpened)

    return (
        <div
            className={opened ? 'left-pop-up-root' : 'left-pop-up-root hide-left-pop-up'}
            onClick={handlerOpen(false)}
            onTouchMove={handlerOpen(false)}
        >
            <div className="left-pop-up" onClick={e => e.stopPropagation() }>
                <div className="user-header">
                    <div className="nav-user">
                        <i className="fa fa-user-circle header-nav" aria-hidden="true"/>
                        <div className="user-info">
                            <span className="fio">Федяков Михаил Васильевич</span>
                            <span className="city">89018533740 | Москва</span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-item">
                        Профиль пользователя
                    </div>
                    <div className="content-item">
                        Помощь
                    </div>
                </div>
                <div className="user-footer">
                    <div>
                        <i className="fa fa-sign-out exit-icon" aria-hidden="true"/>
                    </div>
                    <div>Выйти</div>
                </div>
            </div>
        </div>
    )
})