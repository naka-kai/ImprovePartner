import React, { useState } from 'react'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import { MyTaskInfo } from '@/consts/MyTaskConst'
import { Button } from '@mui/material'
import TableData from './Molecules/TableData'
import { MenuType } from '@/consts/IndexConsts'

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
                        {/* {Object.values(customMenu).map((menu, key) => (
                            <TableData
                                key={key}
                                width={menu.width}
                                alignment="center"
                                data={task.priority.label}
                                type={menu.name}
                            />
                        ))} */}
                        <TableData
                            key="w-1/12"
                            width="center"
                            alignment="center"
                            data={task.priority.label}
                            type="priority"
                        />
                        <TableData
                            width="w-2/12"
                            alignment="center"
                            data={task.scheduled_start_day}
                            type="scheduled_start_day"
                        />
                        <TableData
                            width="w-2/12"
                            alignment="center"
                            data={task.scheduled_end_day}
                            type="scheduled_end_day"
                        />
                        <TableData
                            width="w-1/12"
                            alignment="center"
                            data={task.progress_rate}
                            type="progress_rate"
                        />
                        <TableData
                            width="w-2/12"
                            alignment="center"
                            data={task.working_hours}
                            type="working_hours"
                        />
                        <TableData
                            width="w-2/12"
                            alignment="center"
                            data={task.estimated_time}
                            type="estimated_time"
                        />
                        <TableData
                            width="w-2/12"
                            alignment="center"
                            data={task.think_estimated_time}
                            type="think_estimated_time"
                        />
                        <TableData
                            width="w-1/12"
                            alignment="center"
                            data={task.status.value}
                            type="status"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TableRow