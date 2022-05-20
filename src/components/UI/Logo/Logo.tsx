import React, {memo} from 'react'

export const Logo = memo(() => (
    <div className="mobile-nav">
        <div className="amado-navbar-brand">
            <a href="index.html">
                <img src="/images/core-img/logo.png" alt="" />
            </a>
        </div>
        <div className="amado-navbar-toggler">
            <span />
            <span />
            <span />
        </div>
    </div>
))