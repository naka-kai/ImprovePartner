import {
    ReactElement,
    ReactNode,
    useContext,
    useMemo,
    useState,
    createContext,
} from 'react'

type TabKey = string | number
type TabLabel = string | number | JSX.Element

type TabProps = {
    defaultKey: TabKey
    children: ReactElement<TabItemProps> | ReactElement<TabItemProps>[]
    className?: string
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

export const Tab: React.FC<TabProps> = ({
    defaultKey,
    children,
    className,
}) => {
    const [activeKey, setActiveKey] = useState(defaultKey)
    const headers = useMemo<TabHeader[]>(() => {
        const headerArray: TabHeader[] = []
        if (Array.isArray(children)) {
            children.forEach((c) => {
                if (c.type !== TabItem) throw Error('TabItemを利用してください')
                headerArray.push({
                    tabKey: c.props.tabKey,
                    label: c.props.label,
                })
            })
        } else if (children.type === TabItem) {
            headerArray.push({
                tabKey: children.props.tabKey,
                label: children.props.label,
            })
        } else {
            throw Error('TabItemを利用してください')
        }
        return headerArray
    }, [children])

    return (
        <TabContext.Provider value={{ activeKey }}>
            <div className="h-14 overflow-hidden pb-[10px] w-full">
                <div className="shadow-[0_2px_2px_0px_rgba(0,0,0,0.1)] w-full h-full">
                    <ul className={`flex items-end justify-start` + className}>
                        {headers.map(({ tabKey, label }) => {
                            return (
                                <li
                                    className="w-fit"
                                    key={tabKey}
                                >
                                    <button
                                        className={
                                            `ml-5 inline-block p-[3px] cursor-pointer ` +
                                            (tabKey === activeKey
                                                ? `border-[#1876D1] border-b-[3px] `
                                                : `border-transparent border-b-[3px] `) +
                                            className
                                        }
                                        onClick={() => setActiveKey(tabKey)}
                                    >
                                        {label}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            {children}
        </TabContext.Provider>
    )
}

type TabItemProps = {
    tabKey: TabKey
    label: TabLabel
    children: ReactNode
    className?: string
}

export const TabItem: React.FC<TabItemProps> = ({
    tabKey,
    children,
    className,
}) => {
    const { activeKey } = useContext(TabContext)

    return activeKey === tabKey ? (
        <div className={`p-1` + className}>{children}</div>
    ) : null
}
