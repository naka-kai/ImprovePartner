import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { useState } from 'react'
import { Button } from '@mui/base'
import { MyTaskDeadline, MyTaskInfo, MyTaskStatus } from '@/consts/MyTaskConst'

export default function MyTask({ auth }: PageProps) {
    const [isStop, setIsStop] = useState<boolean>(true)
    const [selectedStatusIds, setSelectedStatusIds] = useState<number[]>([1, 2])
    const [selectedDeadlineIds, setSelectedDeadlineIds] = useState<number[]>([])

    const IconComponent = isStop
        ? PlayCircleOutlinedIcon
        : StopCircleOutlinedIcon

    const toDate = (dateInfo: Date): string => {
        const year = dateInfo.getFullYear()
        const month = ('00' + dateInfo.getMonth()).slice(-2)
        const date = ('00' + dateInfo.getDate()).slice(-2)

        return (year + '/' + month + '/' + date).toString()
    }

    const toTime = (timeInfo: Date): string => {
        const hours = ('00' + timeInfo.getHours()).slice(-2)
        const minutes = ('00' + timeInfo.getMinutes()).slice(-2)
        const seconds = ('00' + timeInfo.getSeconds()).slice(-2)

        return (hours + ':' + minutes + ':' + seconds).toString()
    }

    const toStringPriority = (num: number): string => {
        if (num === 1) {
            return '高'
        } else if (num === 2) {
            return '中'
        } else {
            return '低'
        }
    }

    const toStringStatus = (num: number): string => {
        if (num === 3) {
            return '完了'
        } else if (num === 2) {
            return '進行中'
        } else {
            return '未着手'
        }
    }

    const toStringDeadline = (num: number) => {
        if (num === 1) {
            return '今日'
        } else if (num === 2) {
            return '3日後'
        } else if (num === 3) {
            return '1週間後'
        }
    }

    const handleStatusCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const checkedId: number = Number(e.target.value)
        if (e.target.checked) {
            setSelectedStatusIds([...selectedStatusIds, checkedId])
        } else {
            setSelectedStatusIds(
                selectedStatusIds.filter((id) => id !== checkedId)
            )
        }
    }

    const handleDeadlineCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const checkedId: number = Number(e.target.value)
        if (e.target.checked) {
            setSelectedDeadlineIds([...selectedDeadlineIds, checkedId])
        } else {
            setSelectedDeadlineIds(
                selectedDeadlineIds.filter((id) => id !== checkedId)
            )
        }
    }

    return (
        <AdminLayout user={auth.user}>
            <Head title="マイタスク" />

            <div>
                <div className="border-gray-300 border-b flex justify-end pt-5 pb-2 px-5">
                    <div className="flex flex-col items-center mr-6">
                        <p className="mb-2 text-gray-500">締切日</p>
                        <div>
                            {Object.values(MyTaskDeadline).map((deadline) => (
                                <FormControlLabel
                                    key={deadline}
                                    control={
                                        <Checkbox
                                            sx={{ display: 'none' }}
                                            value={deadline}
                                            checked={selectedDeadlineIds.includes(
                                                deadline
                                            )}
                                            onChange={(e) => {
                                                handleDeadlineCheckboxChange(e)
                                            }}
                                        />
                                    }
                                    label={toStringDeadline(deadline)}
                                    className={
                                        selectedDeadlineIds.includes(deadline)
                                            ? 'bg-sky-300 py-1 px-4 rounded-sm border-sky-300 border'
                                            : 'py-1 px-4 rounded-sm border-gray-200 border'
                                    }
                                    sx={{
                                        marginRight: '0.25rem',
                                        marginLeft: '0.25rem',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="mb-2 text-gray-500">ステータス</p>
                        <div>
                            {Object.values(MyTaskStatus).map((status) => (
                                <FormControlLabel
                                    key={status}
                                    control={
                                        <Checkbox
                                            sx={{ display: 'none' }}
                                            value={status}
                                            checked={selectedStatusIds.includes(
                                                status
                                            )}
                                            onChange={(e) => {
                                                handleStatusCheckboxChange(e)
                                            }}
                                        />
                                    }
                                    label={toStringStatus(status)}
                                    className={
                                        selectedStatusIds.includes(status)
                                            ? 'bg-sky-300 py-1 px-4 rounded-sm border-sky-300 border'
                                            : 'py-1 px-4 rounded-sm border-gray-200 border'
                                    }
                                    sx={{
                                        marginRight: '0.25rem',
                                        marginLeft: '0.25rem',
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mx-2">
                    <button className="my-3 text-gray-500">
                        ＋タスクを追加
                    </button>
                    <div>
                        <div className="flex items-center justify-between w-full text-sm">
                            <div className="flex items-center justify-start w-1/3">
                                <div className="w-1/6"></div>
                                <div className="flex items-center text-gray-400 w-5/6 justify-center">
                                    <UnfoldMoreOutlinedIcon
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p>タスク名</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-end w-2/3">
                                <div className="flex items-center text-gray-400 w-1/12 justify-center">
                                    <UnfoldMoreOutlinedIcon
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p>優先度</p>
                                </div>
                                <div className="flex items-center text-gray-400 w-2/12 justify-center">
                                    <UnfoldMoreOutlinedIcon
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p>開始予定日</p>
                                </div>
                                <div className="flex items-center text-gray-400 w-2/12 justify-center">
                                    <UnfoldMoreOutlinedIcon
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p>締切日</p>
                                </div>
                                <div className="flex items-center text-gray-400 w-1/12 justify-center">
                                    <UnfoldMoreOutlinedIcon
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p>進捗率</p>
                                </div>
                                <div className="flex items-center text-gray-400 w-2/12 justify-center">
                                    <UnfoldMoreOutlinedIcon
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p>作業時間</p>
                                </div>
                                <div className="flex items-center text-gray-400 w-2/12 justify-center">
                                    <UnfoldMoreOutlinedIcon
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p>見積時間</p>
                                </div>
                                <div className="flex items-center text-gray-400 w-2/12 justify-center">
                                    <UnfoldMoreOutlinedIcon
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p>予想見積時間</p>
                                </div>
                                <div className="flex items-center text-gray-400 w-1/12 justify-center">
                                    <UnfoldMoreOutlinedIcon
                                        sx={{ fontSize: 20 }}
                                    />
                                    <p>完了</p>
                                </div>
                            </div>
                        </div>
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
                    <button className="my-3 text-gray-500">
                        ＋タスクを追加
                    </button>
                </div>
            </div>
        </AdminLayout>
    )
}
