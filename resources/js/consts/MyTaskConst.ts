import {
    SortMenuType,
    StatusOptionsType,
    StatusOptions,
    PriorityOptionsType,
    PriorityOptions,
} from './IndexConsts'

// マイタスクの型
export interface MyTaskType {
    id: number
    isStop: boolean
    title: string
    status: StatusOptionsType
    priority: PriorityOptionsType
    scheduled_start_day: Date
    scheduled_end_day: Date
    working_hours: Date
    estimated_time: Date
    think_estimated_time: Date
    progress_rate: number
    description?: string
}

// 並び替えメニューの左側のデータ一覧（'タスク名'や'プロジェクト名'など、幅を大きくとるもの）
export const MyTaskSortExtensionMenu: SortMenuType[] = [
    {
        name: 'タスク名',
        width: 'w-5/6',
    },
]

// 並び替えメニューの右側のデータ一覧
export const MyTaskSortMenu: SortMenuType[] = [
    {
        name: '優先度',
        width: 'w-1/12',
    },
    {
        name: '開始予定日',
        width: 'w-2/12',
    },
    {
        name: '締切日',
        width: 'w-2/12',
    },
    {
        name: '進捗率',
        width: 'w-1/12',
    },
    {
        name: '作業時間',
        width: 'w-2/12',
    },
    {
        name: '見積時間',
        width: 'w-2/12',
    },
    {
        name: '予想見積時間',
        width: 'w-2/12',
    },
    {
        name: '完了',
        width: 'w-1/12',
    },
] as const
type MyTaskSortMenu = (typeof MyTaskSortMenu)[keyof typeof MyTaskSortMenu]

// マイタスクのデータ一覧
export const MyTaskInfo: MyTaskType[] = [
    {
        id: 1,
        isStop: true,
        title: 'タスク１',
        status: StatusOptions.notStarted,
        priority: PriorityOptions.high,
        scheduled_start_day: new Date(2024, 5, 10),
        scheduled_end_day: new Date(2024, 5, 10),
        working_hours: new Date(2024, 5, 10, 1, 0, 0),
        estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        think_estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        progress_rate: 10,
        description: '',
    },
    {
        id: 2,
        isStop: true,
        title: 'タスク２',
        status: StatusOptions.notStarted,
        priority: PriorityOptions.high,
        scheduled_start_day: new Date(2024, 5, 10),
        scheduled_end_day: new Date(2024, 5, 10),
        working_hours: new Date(2024, 5, 10, 1, 0, 0),
        estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        think_estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        progress_rate: 10,
        description: '',
    },
    {
        id: 3,
        isStop: true,
        title: 'タスク３',
        status: StatusOptions.completed,
        priority: PriorityOptions.low,
        scheduled_start_day: new Date(2024, 5, 10),
        scheduled_end_day: new Date(2024, 5, 10),
        working_hours: new Date(2024, 5, 10, 1, 0, 0),
        estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        think_estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        progress_rate: 10,
        description: '',
    },
    {
        id: 4,
        isStop: true,
        title: 'タスク４',
        status: StatusOptions.notStarted,
        priority: PriorityOptions.high,
        scheduled_start_day: new Date(2024, 10, 10),
        scheduled_end_day: new Date(2024, 5, 10),
        working_hours: new Date(2024, 5, 10, 1, 0, 0),
        estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        think_estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        progress_rate: 10,
        description: '',
    },
    {
        id: 5,
        isStop: true,
        title: 'タスク５',
        status: StatusOptions.notStarted,
        priority: PriorityOptions.high,
        scheduled_start_day: new Date(2024, 5, 10),
        scheduled_end_day: new Date(2024, 5, 10),
        working_hours: new Date(2024, 5, 10, 1, 0, 0),
        estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        think_estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        progress_rate: 10,
        description: '',
    },
]
