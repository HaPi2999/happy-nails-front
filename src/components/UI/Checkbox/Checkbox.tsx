import React, {memo} from 'react'
import {ICheckbox} from './types'

export const Checkbox = memo(({ label, onChange, isChecked = false }: ICheckbox) => {
    const key = ((new Date()).getMilliseconds() + Math.random()).toString()

    return (
        <>
            <div className="form-check">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={isChecked}
                    id={key}
                    onChange={onChange}
                />
                <label className="form-check-label" htmlFor={key}>{label}</label>
            </div>
        </>
    )
})