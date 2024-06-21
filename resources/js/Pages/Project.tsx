import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import React, { useState } from 'react'
import { Button } from '@mui/base'
import {
    MyTaskInfo,
    MyTaskExtensionMenu,
    MyTaskMenu,
} from '@/consts/MyTaskConst'
import SortMenu from '@/Components/SortMenu'
import StatusOption from '@/Components/StatusOption'
import DeadlineOption from '@/Components/DeadlineOption'
import AddButton from '@/Components/Molecules/AddButton'
import { format } from 'date-fns/format'
import SortButton from '@/Components/Molecules/SortButton'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import TextInput from '@/Components/Defaults/TextInput'
import Checkbox from '@/Components/Defaults/Checkbox'
import InputLabel from '@/Components/Defaults/InputLabel'
import EditIcon from '@mui/icons-material/Edit'
import { Tab, TabItem } from '@/Components/Tab'

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

    return (
        <Layout member={auth.member}>
            <Head title="プロジェクト" />

            <Tab defaultKey="task">
                <TabItem
                    tabKey="task"
                    label="タスク一覧"
                    className="flex w-full mt-[-10px]"
                >
                    <div className="flex">
                        <div className="bg-sky-200 w-52 min-h-screen border-r">
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
                                            プロジェクトの見積時間： 100日
                                            00:00:00
                                        </span>
                                    </div>
                                    <div className="mr-5">
                                        <span>
                                            タスクの合計見積時間： 100日
                                            00:00:00
                                        </span>
                                    </div>
                                    <div className="mr-5">
                                        <span>
                                            合計作業時間： 100日 00:00:00
                                        </span>
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
                                        extensionMenu={MyTaskExtensionMenu}
                                        customMenu={MyTaskMenu}
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
                                                        {task.priority.label}
                                                    </p>
                                                    <p className="w-2/12 text-center">
                                                        {toDate(
                                                            task.scheduled_start_day
                                                        )}
                                                    </p>
                                                    <p className="w-2/12 text-center">
                                                        {toDate(
                                                            task.scheduled_end_day
                                                        )}
                                                    </p>
                                                    <p className="w-1/12 text-center">
                                                        {task.progress_rate}％
                                                    </p>
                                                    <p className="w-2/12 text-center">
                                                        {toTime(
                                                            task.working_hours
                                                        )}
                                                    </p>
                                                    <p className="w-2/12 text-center">
                                                        {toTime(
                                                            task.estimated_time
                                                        )}
                                                    </p>
                                                    <p className="w-2/12 text-center">
                                                        {toTime(
                                                            task.think_estimated_time
                                                        )}
                                                    </p>
                                                    <p className="w-1/12 text-center">
                                                        {task.status.value !==
                                                        3 ? (
                                                            <Checkbox />
                                                        ) : (
                                                            <Checkbox
                                                                defaultChecked
                                                            />
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
                </TabItem>
                <TabItem
                    tabKey="project"
                    label="プロジェクト一覧"
                    className="flex w-full mt-[-10px]"
                >
                    content
                </TabItem>
            </Tab>
        </Layout>
    )
}

export default Project
