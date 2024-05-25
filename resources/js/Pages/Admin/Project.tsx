import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import Checkbox from '@mui/material/Checkbox'
import React, { useState } from 'react'
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
import { format } from 'date-fns/format'
import { PriorityOptions } from '@/consts/IndexConsts'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Typography from '@mui/material/Typography'
import SortButton from '@/Components/Molecules/SortButton'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import EditIcon from '@mui/icons-material/Edit'

const Project: React.FC<PageProps> = ({ auth }) => {
    const [isStop, setIsStop] = useState<boolean>(true) // タスクが停止中かどうか

    // 再生中か停止中かでアイコンを切り替える
    const IconComponent = isStop
        ? PlayCircleOutlinedIcon
        : StopCircleOutlinedIcon

    // YYYY/MM/DDの形にフォーマットする
    const toDate = (dateInfo: Date): string => {
        return format(dateInfo, 'yyyy/MM/dd')
    }

    // 01:00:00の形にフォーマットする
    const toTime = (timeInfo: Date): string => {
        return format(timeInfo, 'HH:mm:ss')
    }

    // 優先度を文字列に変換する
    const toStringPriority = (num: number): string => {
        if (num === PriorityOptions.high) {
            return '高'
        } else if (num === PriorityOptions.middle) {
            return '中'
        } else if (num === PriorityOptions.low) {
            return '低'
        } else {
            throw new Error('不正な値を検出: PriorityOptions=' + num)
        }
    }

    return (
        <AdminLayout user={auth.user}>
            <Head title="プロジェクト" />

            <div className="h-14 overflow-hidden pb-[10px] w-full">
                <div className="shadow-[0_2px_2px_0px_rgba(0,0,0,0.1)] w-full h-full">
                    <div className="flex items-end justify-start">
                        <p className="ml-5 border-b-[3px] border-[#1876D1] inline-block p-[3px]">
                            タスク一覧
                        </p>
                        <p className="ml-5 border-b-[3px] border-transparent inline-block p-[3px]">
                            プロジェクト一覧
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex w-full mt-[-10px]">
                <div className="bg-sky-200 w-52">
                    <div className="bg-[#1876D1] py-2">
                        <p className="text-white text-center text-lg">
                            プロジェクト一覧
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center my-3">
                        <div className="my-1">
                            {/* <TextField
                                className="bg-white rounded-md"
                                id="project-name"
                                label="プロジェクト名で絞り込む"
                                variant="outlined"
                                size="small"
                                InputLabelProps={{
                                    style: { fontSize: '13px' },
                                    shrink: false,
                                }}
                            /> */}
                        </div>
                        <div className="my-1">
                            <TextField
                                className="bg-white rounded-md"
                                id="client-name"
                                label="取引先名で絞り込む"
                                variant="outlined"
                                size="small"
                                InputLabelProps={{
                                    style: { fontSize: '13px' },
                                    shrink: false,
                                }}
                            />
                        </div>
                        <div>
                            <FormControlLabel
                                control={<Checkbox />}
                                label={
                                    <Typography sx={{ fontSize: 13 }}>
                                        完了プロジェクトを表示
                                    </Typography>
                                }
                            />
                        </div>
                        <div className="text-[13px] text-gray-500 mt-3 mb-1">
                            <SortButton
                                menu="並べ替え(プロジェクト名)"
                                width="w-full"
                                colorNum="500"
                            />
                        </div>
                        <div className="w-full">
                            <div className="bg-white w-full flex items-center justify-start h-12 mb-[1px]">
                                <p className="ml-3">プロジェクト１</p>
                                <PlayArrowIcon className="ml-1 mt-[-1.5px]" />
                            </div>
                            <div className="bg-white w-full flex items-center justify-start h-12">
                                <p className="ml-3">プロジェクト２</p>
                            </div>
                        </div>
                        <div className="w-full flex justify-start ml-3 text-sm">
                            <AddButton data="プロジェクト" />
                        </div>
                    </div>
                </div>
                <div className="w-[calc(100%-13rem)]">
                    <div>
                        <div className="flex items-center mt-5 ml-5">
                            <h2>
                                プロジェクト１プロジェクト１プロジェクト１プロジェクト１
                            </h2>
                            <Button>
                                <EditIcon
                                    fontSize="small"
                                    className="mt-[-5px] ml-1 text-gray-400"
                                />
                            </Button>
                        </div>
                        <div className="flex items-center justify-end mt-3 text-gray-500">
                            <div className="mr-5">
                                <span>
                                    プロジェクトの見積時間： 100日 00:00:00
                                </span>
                            </div>
                            <div className="mr-5">
                                <span>
                                    タスクの合計見積時間： 100日 00:00:00
                                </span>
                            </div>
                            <div className="mr-5">
                                <span>合計作業時間： 100日 00:00:00</span>
                            </div>
                        </div>
                    </div>
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
                                                onClick={() =>
                                                    setIsStop(!isStop)
                                                }
                                            />
                                            <p className="w-5/6 text-left">
                                                {task.title}
                                            </p>
                                        </Button>
                                        <div className="flex items-center justify-end w-2/3">
                                            <p className="w-1/12 text-center">
                                                {toStringPriority(
                                                    task.priority
                                                )}
                                            </p>
                                            <p className="w-2/12 text-center">
                                                {toDate(
                                                    task.scheduled_start_day
                                                )}
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
                                                {toTime(
                                                    task.think_estimated_time
                                                )}
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
            </div>
        </AdminLayout>
    )
}

export default Project
