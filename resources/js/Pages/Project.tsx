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
import Checkbox from '@/Components/Defaults/Checkbox'
import EditIcon from '@mui/icons-material/Edit'
import { Tab, TabItem } from '@/Components/Tab'
import { SideTab, SideTabItem } from '@/Components/SideTab'

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
                    <SideTab defaultKey="1">
                        <SideTabItem
                            tabKey="1"
                            label="プロジェクト１"
                        >
                            {/* プロジェクト */}
                            <div className="w-full">
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
                                                                textAlign:
                                                                    'center',
                                                                color: '#38bdf8',
                                                            }}
                                                            onClick={() =>
                                                                setIsStop(
                                                                    !isStop
                                                                )
                                                            }
                                                        />
                                                        <p className="w-5/6 text-left">
                                                            {task.title}
                                                        </p>
                                                    </Button>
                                                    <div className="flex items-center justify-end w-2/3">
                                                        <p className="w-1/12 text-center">
                                                            {
                                                                task.priority
                                                                    .label
                                                            }
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
                                                            {task.progress_rate}
                                                            ％
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
                                                            {task.status
                                                                .value !== 3 ? (
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
                                </div>
                            </div>
                        </SideTabItem>

                        <SideTabItem
                            tabKey="2"
                            label="プロジェクト２"
                        >
                            <p className="ml-3">プロジェクト２</p>
                        </SideTabItem>
                    </SideTab>
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
