import React, { useState } from 'react'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import Checkbox from '@mui/material/Checkbox'
import { MyTaskInfo } from '@/consts/MyTaskConst'
import { Button } from '@mui/material'

const TableRow: React.FC = () => {
    const [isStop, setIsStop] = useState<boolean>(true) // タスクが停止中かどうか

    // 再生中か停止中かでアイコンを切り替える
    const IconComponent = isStop
        ? PlayCircleOutlinedIcon
        : StopCircleOutlinedIcon

    // YYYY/MM/DDの形にフォーマットする
    const toDate = (dateInfo: Date): string => {
        const year = dateInfo.getFullYear()
        const month = ('00' + dateInfo.getMonth()).slice(-2)
        const date = ('00' + dateInfo.getDate()).slice(-2)

        return (year + '/' + month + '/' + date).toString()
    }

    // 01:00:00の形にフォーマットする
    const toTime = (timeInfo: Date): string => {
        const hours = ('00' + timeInfo.getHours()).slice(-2)
        const minutes = ('00' + timeInfo.getMinutes()).slice(-2)
        const seconds = ('00' + timeInfo.getSeconds()).slice(-2)

        return (hours + ':' + minutes + ':' + seconds).toString()
    }

    // 優先度を文字列に変換する
    const toStringPriority = (num: number): string => {
        if (num === 1) {
            return '高'
        } else if (num === 2) {
            return '中'
        } else {
            return '低'
        }
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
                        <p className="w-1/12 text-center">
                            {toStringPriority(task.priority)}
                        </p>
                        <p className="w-2/12 text-center">
                            {toDate(task.scheduled_start_day)}
                        </p>
                        <p className="w-2/12 text-center">
                            {toDate(task.scheduled_end_day)}
                        </p>
                        <p className="w-1/12 text-center">
                            {task.progress_rate}％
                        </p>
                        <p className="w-2/12 text-center">
                            {toTime(task.working_hours)}
                        </p>
                        <p className="w-2/12 text-center">
                            {toTime(task.estimated_time)}
                        </p>
                        <p className="w-2/12 text-center">
                            {toTime(task.think_estimated_time)}
                        </p>
                        <p className="w-1/12 text-center">
                            {task.status !== 3 ? (
                                <Checkbox />
                            ) : (
                                <Checkbox defaultChecked />
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TableRow
