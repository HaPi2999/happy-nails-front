import {memo, useState} from 'react'
import ReactSlider from 'react-slider'

export const RangeSlider = memo(() => {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(100000)

    const handleChangeSlider = (newValues: number[]) => {
        setMin(newValues[0])
        setMax(newValues[1])
    }

    return (
        <div className="slider-range">
            <div
                className="slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
            >
                <ReactSlider
                    className="ui-slider-range ui-widget-header ui-corner-all"
                    thumbClassName="ui-slider-handle ui-state-default ui-corner-all"
                    trackClassName="ui-slider-handle ui-state-default ui-corner-all"
                    defaultValue={[0, 100000000000000000000]}
                    pearling
                    onChange={handleChangeSlider}
                />
            </div>
            <div className="range-price">{min}₽ - {max}₽</div>
        </div>
    )
})