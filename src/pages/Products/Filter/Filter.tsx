import {memo} from 'react'
import {FilterItem} from 'components/FilterItem'
import {Checkbox} from 'components/UI/Checkbox'
import {RangeSlider} from 'components/UI/RangeSlider/RangeSlider'
import {RadioButton} from 'components/UI/RadioButton/RadioButton'

export const Filter = memo(() => {
    return (
        <div className="shop_sidebar_area">
            <FilterItem title="Catagories" additionalStyles="catagory">
                <RadioButton items={[
                    {value: '123', label: '123'},
                    {value: '1', label: '1231'},
                    {value: '2', label: '3'},
                    {value: '4', label: '4'},
                    {value: '5', label: '5'},
                    {value: '6', label: '6'},
                ]}/>
            </FilterItem>
            <FilterItem title="Brands" additionalStyles="brands">
                <div className="widget-desc">
                    {[1,2,3,4,5,6].map((item, index) => (
                        <Checkbox label="123123" onChange={() => {}} isChecked={true} />
                    ))}
                </div>
            </FilterItem>
            <FilterItem title="Цвета" additionalStyles="color">
                <div className="widget-desc">
                    <ul className="d-flex">
                        {[1,2,3,4,5,6,7,8].map((color, index) => (
                            <li key={index}>
                                <a href="#" className={`color${color}`}/>
                            </li>
                        ))}
                    </ul>
                </div>
            </FilterItem>
            <FilterItem title="Цена" additionalStyles="price">
                <div className="widget-desc">
                    <RangeSlider/>
                </div>
            </FilterItem>
        </div>
    )
})