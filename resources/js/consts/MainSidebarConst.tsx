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

// メインサイドバーのメニュータイプ
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

export enum MainSidebarStatusEnum {
    MyTask = 1,
    Project,
    Team,
    Client,
    Dashboard,
    Analysis,
    Export,
    Setting,
}

export const MainSidebarInfo: MainSidebarMenuType<MainSidebarStatusEnum>[] = [
    {
        key: MainSidebarStatusEnum.MyTask,
        title: 'マイタスク',
        href: UriEnum.MyTask,
        svg: <TaskAltOutlinedIcon />,
    },
    {
        key: MainSidebarStatusEnum.Project,
        title: 'プロジェクト管理',
        href: UriEnum.Project,
        svg: <AccountTreeOutlinedIcon />,
    },
    {
        key: MainSidebarStatusEnum.Team,
        title: 'チーム管理',
        href: UriEnum.Team,
        svg: <Diversity3OutlinedIcon />,
    },
    {
        key: MainSidebarStatusEnum.Client,
        title: '取引先管理',
        href: UriEnum.Client,
        svg: <BusinessOutlinedIcon />,
    },
    {
        key: MainSidebarStatusEnum.Dashboard,
        title: 'ダッシュボード',
        href: UriEnum.Dashboard,
        svg: <DashboardCustomizeOutlinedIcon />,
    },
    {
        key: MainSidebarStatusEnum.Analysis,
        title: '時間分析',
        href: UriEnum.Analysis,
        svg: <InsertChartOutlinedIcon />,
    },
    {
        key: MainSidebarStatusEnum.Export,
        title: 'エクスポート',
        href: UriEnum.Export,
        svg: <FileUploadOutlinedIcon />,
    },
    {
        key: MainSidebarStatusEnum.Setting,
        title: '各種設定',
        href: UriEnum.Setting,
        svg: <SettingsOutlinedIcon />,
    },
]
