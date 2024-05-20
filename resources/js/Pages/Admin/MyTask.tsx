import AdminLayout from '@/Layouts/AdminLayout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'

import { useState } from 'react'

import {
    MyTaskInfo,
    MyTaskSortExtensionMenu,
    MyTaskSortMenu,
} from '@/consts/MyTaskConst'
import SortMenu from '@/Components/SortMenu'
import StatusOption from '@/Components/StatusOption'
import DeadlineOption from '@/Components/DeadlineOption'
import TableRow from '@/Components/TableRow'

export default function MyTask({ auth }: PageProps) {
    return (
        <AdminLayout user={auth.user}>
            <Head title="マイタスク" />

            <div>
                <div className="border-gray-300 border-b flex justify-end pt-5 pb-2 px-5">
                    <DeadlineOption />
                    <StatusOption />
                </div>
                <div className="mx-2">
                    <button className="my-3 text-gray-500">
                        ＋タスクを追加
                    </button>
                    <div>
                        <SortMenu
                            extensionSortMenu={MyTaskSortExtensionMenu}
                            customSortMenu={MyTaskSortMenu}
                        />
                        <TableRow />
                    </div>
                    <button className="my-3 text-gray-500">
                        ＋タスクを追加
                    </button>
                </div>
            </div>
        </AdminLayout>
    )
}
