import React from 'react'
import { UriEnum } from './UriConsts'
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined'
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined'
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined'
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined'
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined'
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined'
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'

// メインサイドバーのメニューの型情報
export interface MainSidebarMenuType<T> {
    key: T
    title: string
    href: UriEnum
    svg: React.ReactNode
    children_array?: {
        key: T
        title: string
        href: UriEnum
        svg: React.ReactNode
    }[]
}

// メインサイドバーのメニューのキーNo.
export enum MainSidebarKeyEum {
    MyTask = 1,
    Project = 2,
    Client = 3,
    Member = 4,
    Dashboard = 5,
    Analysis = 6,
    Export = 7,
    Setting = 8,
}

// メインサイドバーのデータ一覧
export const MainSidebarInfo: MainSidebarMenuType<MainSidebarKeyEum>[] = [
    {
        key: MainSidebarKeyEum.MyTask,
        title: 'マイタスク',
        href: UriEnum.MyTask,
        svg: <TaskAltOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        key: MainSidebarKeyEum.Project,
        title: 'プロジェクト',
        href: UriEnum.Project,
        svg: <AccountTreeOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        key: MainSidebarKeyEum.Client,
        title: '取引先',
        href: UriEnum.Client,
        svg: <BusinessOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        key: MainSidebarKeyEum.Member,
        title: 'メンバー',
        href: UriEnum.Member,
        svg: <Diversity3OutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        key: MainSidebarKeyEum.Dashboard,
        title: 'ダッシュボード',
        href: UriEnum.Dashboard,
        svg: <DashboardCustomizeOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        key: MainSidebarKeyEum.Analysis,
        title: '時間分析',
        href: UriEnum.Analysis,
        svg: <InsertChartOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        key: MainSidebarKeyEum.Export,
        title: 'エクスポート',
        href: UriEnum.Export,
        svg: <FileUploadOutlinedIcon sx={{ fontSize: 30 }} />,
    },
    {
        key: MainSidebarKeyEum.Setting,
        title: '各種設定',
        href: UriEnum.Setting,
        svg: <SettingsOutlinedIcon sx={{ fontSize: 30 }} />,
    },
]
