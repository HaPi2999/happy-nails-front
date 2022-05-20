export interface IRadioButton {
    items: IRadioButtonItem[]
    selectedValue?: string
}

interface IRadioButtonItem {
    value: string
    label: string
}