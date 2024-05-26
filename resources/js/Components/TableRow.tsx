import React, { useState } from 'react'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import { MyTaskInfo } from '@/consts/MyTaskConst'
import { Button } from '@mui/material'
import TableData from './Molecules/TableData'
import { DataType, MenuType } from '@/consts/IndexConsts'

type Props = {
    extensionMenu: MenuType[]
    customMenu: MenuType[]
}

const TableRow: React.FC<Props> = ({ extensionMenu, customMenu }) => {
    const [isStop, setIsStop] = useState<boolean>(true) // タスクが停止中かどうか

    // 再生中か停止中かでアイコンを切り替える
    const IconComponent = isStop
        ? PlayCircleOutlinedIcon
        : StopCircleOutlinedIcon

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
            {MyTaskInfo.map((task) => (
                <div
                    key={task.id}
                    className="flex items-center justify-between border border-gray-300 p-1 my-1"
                >
                    <div className="flex items-center justify-start w-1/3">
                        <Button>
                            <IconComponent
                                sx={{
                                    fontSize: 35,
                                    textAlign: 'center',
                                    color: '#38bdf8',
                                }}
                                onClick={() => setIsStop(!isStop)}
                            />
                        </Button>
                        <p className="w-5/6 text-left">{task.title}</p>
                    </div>
                    <div className="flex items-center justify-end w-2/3">
                        {Object.values(customMenu).map((menu, key) => (
                            <TableData
                                key={key}
                                width={menu.width}
                                alignment="center"
                                data={
                                    isMyDataKey(menu.name)
                                        ? task[menu.name]
                                        : ''
                                }
                                type={menu.name}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TableRow
