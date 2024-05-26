import React from 'react'
import MenuButton from './Molecules/SortMenuButton'
import { MenuType } from '@/consts/IndexConsts'

type Props = {
    extensionMenu: MenuType[]
    customMenu: MenuType[]
}

const SortMenu: React.FC<Props> = ({ extensionMenu, customMenu }) => {
    return (
        <div className="flex items-center justify-between w-full text-sm">
            <div className="flex items-center justify-start w-1/3">
                <div className="w-1/6"></div>
                {Object.values(extensionMenu).map((menu, key) => (
                    <MenuButton
                        key={key + 100}
                        menu={menu.title}
                        width={menu.width}
                        colorNum="400"
                    />
                ))}
            </div>
            <div className="flex items-center justify-end w-2/3">
                {Object.values(customMenu).map((menu, key) => (
                    <MenuButton
                        key={key}
                        menu={menu.title}
                        width={menu.width}
                        colorNum="400"
                    />
                ))}
            </div>
        </div>
    )
}

export default SortMenu
