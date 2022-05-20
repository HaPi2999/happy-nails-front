import React, {memo, useState} from 'react'
import {IRadioButton} from './types'

export const RadioButton = memo(({ items, selectedValue }: IRadioButton) => {
    const [selected, setSelected] = useState(selectedValue || '')

    const isActive = (value: string) =>
        value === selected
            ? 'active'
            : ''

    const handlerChange = (value: string) => () => {
        setSelected(value)
    }

    return (
        <>
            <div className="catagories-menu">
                <ul>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={isActive(item.value)}
                            onClick={handlerChange(item.value)}
                        >
                            <span>{item.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
})