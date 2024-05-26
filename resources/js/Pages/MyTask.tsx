import Layout from '@/Layouts/Layout'
import { Head } from '@inertiajs/react'
import { PageProps } from '@/types'
import { MyTaskExtensionMenu, MyTaskMenu } from '@/consts/MyTaskConst'
import TableRow from '@/Components/TableRow'
import React from 'react'
import SortMenu from '@/Components/SortMenu'
import StatusOption from '@/Components/StatusOption'
import DeadlineOption from '@/Components/DeadlineOption'
import AddButton from '@/Components/Molecules/AddButton'

const MyTask: React.FC<PageProps> = ({ auth }) => {
    return (
        <Layout user={auth.user}>
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
        </Layout>
    )
}

export default MyTask
