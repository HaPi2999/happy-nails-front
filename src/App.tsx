import React, {memo, Suspense, useState} from 'react'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import {ROUTES} from 'routes'
import 'styles.scss'
import {RecoilRoot} from 'recoil'
import {Header} from 'components/Header'
import {StaticNav} from 'components/UI/StaticNav'
import {Footer} from 'components/Footer'
import {Discount} from 'components/Discount'
import {BottomNav} from 'components/UI/BottomNav'

export const App = memo(() => {
    return (
        <Suspense fallback={<>Loading....</>}>
            <RecoilRoot>
                <BrowserRouter>
                    <div className="container-fluid">
                        <StaticNav/>
                        <Header />
                        <Routes>
                            {ROUTES.map((route, index) => (
                                <Route key={index} path={route.path} element={route.component}/>
                            ))}
                        </Routes>
                        <Discount/>
                        <Footer/>
                    </div>
                    <BottomNav/>
                </BrowserRouter>
            </RecoilRoot>
        </Suspense>
    )
})
