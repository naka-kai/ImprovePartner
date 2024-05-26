import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import { MyTaskExtensionMenu, MyTaskMenu } from '@/consts/MyTaskConst'
import TableRow from '@/Components/TableRow'
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined'
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined'
import Checkbox from '@/Components/Defaults/Checkbox'
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

const MyTask: React.FC<PageProps> = ({ auth }) => {
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
                            extensionMenu={MyTaskExtensionMenu}
                            customMenu={MyTaskMenu}
                        />
                        <TableRow
                            extensionMenu={MyTaskExtensionMenu}
                            customMenu={MyTaskMenu}
                        />
                    </div>
                    <AddButton data="タスク" />
                </div>
            </div>
        </AdminLayout>
    )
}

export default MyTask
