import {
    ReactElement,
    ReactNode,
    useContext,
    useMemo,
    useState,
    createContext,
} from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AddButton from '@/Components/Molecules/AddButton'
import TextInput from '@/Components/Defaults/TextInput'
import InputLabel from '@/Components/Defaults/InputLabel'
import SortButton from '@/Components/Molecules/SortButton'
import Checkbox from '@/Components/Defaults/Checkbox'

type TabKey = string | number
type TabLabel = string | number | JSX.Element

type TabProps = {
    defaultKey: TabKey
    children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[]
}

type TabHeader = {
    tabKey: TabKey
    label: TabLabel
}

type TabContextState = {
    activeKey: TabKey
}

const TabContext = createContext<TabContextState>({
    activeKey: '',
})

export const SideTab: React.FC<TabProps> = ({ defaultKey, children }) => {
    const [activeKey, setActiveKey] = useState(defaultKey)
    const headers = useMemo<TabHeader[]>(() => {
        const headerArray: TabHeader[] = []
        if (Array.isArray(children)) {
            children.forEach((c) => {
                if (c.type !== SideTabItem)
                    throw Error('SideTabItemを利用してください')
                headerArray.push({
                    tabKey: c.props.tabKey,
                    label: c.props.label,
                })
            })
        } else if (children.type === SideTabItem) {
            headerArray.push({
                tabKey: children.props.tabKey,
                label: children.props.label,
            })
        } else {
            throw Error('SideTabItemを利用してください')
        }
        return headerArray
    }, [children])

    return (
        <TabContext.Provider value={{ activeKey }}>
            {/* サブサイドバー */}
            <div className="flex w-full">
                <div className="bg-sky-200 w-64 min-h-screen border-r">
                    <div className="bg-[#1876D1] py-2">
                        <p className="text-white text-center text-lg">
                            プロジェクト一覧
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center my-3">
                        <div className="my-1 w-11/12">
                            <TextInput
                                className="text-[13px] w-full"
                                placeholder="プロジェクト名で絞り込む"
                            />
                        </div>
                        <div className="my-1 w-11/12">
                            <TextInput
                                className="text-[13px] w-full"
                                placeholder="取引先名で絞り込む"
                            />
                        </div>
                        <div className="flex items-center w-11/12 mt-1">
                            <InputLabel className="block text-sm text-gray-500">
                                <Checkbox className="mr-2" />
                                完了プロジェクトを表示
                            </InputLabel>
                        </div>
                        <div className="text-[13px] text-gray-500 mt-3 mb-1">
                            <SortButton
                                menu="並べ替え(プロジェクト名)"
                                width="w-full"
                                colorNum="500"
                            />
                        </div>
                        <ul className="w-full">
                            {headers.map(({ tabKey, label }) => {
                                return (
                                    <li
                                        className="bg-white w-full flex items-center justify-start h-12 mb-[1px]"
                                        key={tabKey}
                                    >
                                        <button
                                            className="ml-3"
                                            onClick={() => setActiveKey(tabKey)}
                                        >
                                            {label}
                                        </button>
                                        {tabKey === activeKey ? (
                                            <PlayArrowIcon className="ml-1 mt-[-1.5px]" />
                                        ) : (
                                            ''
                                        )}
                                    </li>
                                )
                            })}
                        </ul>
                        <div className="w-full flex justify-start ml-3 text-sm">
                            <AddButton data="プロジェクト" />
                        </div>
                    </div>
                </div>
                {children}
            </div>
        </TabContext.Provider>
    )
}

type TabItemProps = {
    tabKey: TabKey
    label: TabLabel
    children: ReactNode
}

export const SideTabItem: React.FC<TabItemProps> = ({ tabKey, children }) => {
    const { activeKey } = useContext(TabContext)

    return activeKey === tabKey ? (
        <div className="p-1 w-full">{children}</div>
    ) : null
}
