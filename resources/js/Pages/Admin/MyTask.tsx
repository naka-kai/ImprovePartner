import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import { Button } from '@mui/base'
import {
    MyTaskInfo,
    MyTaskSortExtensionMenu,
    MyTaskSortMenu,
} from '@/consts/MyTaskConst'
import SortMenu from '@/Components/SortMenu'
import StatusOption from '@/Components/StatusOption'
import DeadlineOption from '@/Components/DeadlineOption'
import AddButton from '@/Components/Molecules/AddButton'

export default function MyTask({ auth }: PageProps) {
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
        <AdminLayout user={auth.user}>
            <Head title="マイタスク" />

            <div>
                <div className="border-gray-300 border-b flex justify-end pt-5 pb-2 px-5">
                    <DeadlineOption />
                    <StatusOption />
                </div>
                <div className="mx-2">
                    <AddButton data="タスク" />
                    <div>
                        <SortMenu
                            extensionSortMenu={MyTaskSortExtensionMenu}
                            customSortMenu={MyTaskSortMenu}
                        />
                        <div>
                            {MyTaskInfo.map((task) => (
                                <div
                                    key={task.id}
                                    className="flex items-center justify-between border border-gray-300 p-1 my-1"
                                >
                                    <Button className="flex items-center justify-start w-1/3">
                                        <IconComponent
                                            sx={{
                                                fontSize: 35,
                                                width: '16.666667%',
                                                textAlign: 'center',
                                                color: '#38bdf8',
                                            }}
                                            onClick={() => setIsStop(!isStop)}
                                        />
                                        <p className="w-5/6 text-left">
                                            {task.title}
                                        </p>
                                    </Button>
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
                    </div>
                    <AddButton data="タスク" />
                </div>
            </div>
        </AdminLayout>
    )
}
