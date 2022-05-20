import {memo} from 'react'

export const Pagination = memo(() => {
    return (
        <div id="pagination" className="pagination flex-block">
            <a id="prev-pag" className="prev" rel="prev" />
            <a>1</a>
            <a rel="prev">2</a>
            <a className="active">3</a>
            <a rel="next">4</a>
            <a href="">..</a>
            <a>7</a>
            <a>8</a>
            <a>9</a>
            <a id="next-pag" className="next" rel="next"/>
        </div>
    )
})