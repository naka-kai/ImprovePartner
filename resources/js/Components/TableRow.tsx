import React, { useState } from 'react'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import { Button } from '@mui/material'
import TableData from './Molecules/TableData'
import { DataType, MenuType } from '@/consts/IndexConsts'

type Props = {
    extensionMenu: MenuType[]
    customMenu: MenuType[]
    info: DataType[]
}

const TableRow: React.FC<Props> = ({ extensionMenu, customMenu, info }) => {
    // 各infoDataのアイコンの状態を管理するステートを作成
    const [iconStates, setIconStates] = useState<{ [key: number]: boolean }>(
        () => {
            const initialState: { [key: number]: boolean } = {}
            info.forEach((infoData) => {
                initialState[infoData.id] = true // 初期状態は停止
            })
            return initialState
        }
    )

    // アイコンの状態をトグルする
    const toggleIconState = (id: number) => {
        setIconStates((prevStates) => ({
            ...prevStates,
            [id]: !prevStates[id],
        }))
    }

    // dataの型の絞り込みを行う
    const isMyDataKey = (key: string): key is keyof DataType => {
        return [
            'title',
            'status',
            'priority',
            'scheduled_start_day',
            'scheduled_end_day',
            'working_hours',
            'estimated_time',
            'think_estimated_time',
            'progress_rate',
        ].includes(key)
    }

    return (
        <div>
            {info.map((infoData) => {
                const isStop = iconStates[infoData.id]
                const IconComponent = isStop
                    ? PlayCircleOutlinedIcon
                    : StopCircleOutlinedIcon
                return (
                    <div
                        key={infoData.id}
                        className="flex items-center justify-between border border-gray-300 p-1 my-1"
                    >
                        <div className="flex items-center justify-start w-1/3">
                            <div id={'isPlayIcon_' + infoData.id}>
                                <Button>
                                    <IconComponent
                                        sx={{
                                            fontSize: 35,
                                            textAlign: 'center',
                                            color: '#38bdf8',
                                        }}
                                        onClick={() =>
                                            toggleIconState(infoData.id)
                                        }
                                    />
                                </Button>
                            </div>
                            <p className="w-5/6 text-left">{infoData.title}</p>
                        </div>
                        <div className="flex items-center justify-end w-2/3">
                            {Object.values(customMenu).map((menu, key) => {
                                const data = isMyDataKey(menu.name)
                                    ? infoData[menu.name]
                                    : undefined
                                return (
                                    <TableData
                                        key={key}
                                        width={menu.width}
                                        alignment="center"
                                        data={data !== undefined ? data : ''}
                                        type={menu.name}
                                    />
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default TableRow
