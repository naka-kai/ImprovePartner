import React from 'react'
import SortButton from './Molecules/SortButton'
import { SortMenuType } from '@/consts/IndexConsts'

type Props = {
    extensionSortMenu: SortMenuType[]
    customSortMenu: SortMenuType[]
}

const SortMenu: React.FC<Props> = ({ extensionSortMenu, customSortMenu }) => {
    return (
        <div className="flex items-center justify-between w-full text-sm">
            <div className="flex items-center justify-start w-1/3">
                <div className="w-1/6"></div>
                {Object.values(extensionSortMenu).map((menu, key) => (
                    <SortButton
                        key={key + 100}
                        menu={menu.name}
                        width={menu.width}
                        colorNum="400"
                    />
                ))}
            </div>
            <div className="flex items-center justify-end w-2/3">
                {Object.values(customSortMenu).map((menu, key) => (
                    <SortButton
                        key={key}
                        menu={menu.name}
                        width={menu.width}
                        colorNum="400"
                    />
                ))}
            </div>
        </div>
    )
}

export default SortMenu
