// マイタスクの型情報
export interface MyTaskType {
    id: number
    isStop: boolean
    title: string
    status: MyTaskStatus
    priority: MyTaskPriority
    scheduled_start_day: Date
    scheduled_end_day: Date
    working_hours: Date
    estimated_time: Date
    think_estimated_time: Date
    progress_rate: number
    description?: string
}

// ステータス
export const MyTaskStatus = {
    notStarted: 1, // 未着手
    working: 2, // 進行中
    completed: 3, // 完了
} as const
type MyTaskStatus = (typeof MyTaskStatus)[keyof typeof MyTaskStatus]

// 優先度
export const MyTaskPriority = {
    high: 1,
    middle: 2,
    low: 3,
} as const
type MyTaskPriority = (typeof MyTaskPriority)[keyof typeof MyTaskPriority]

// 締切日
export const MyTaskDeadline = {
    today: 1,
    threeDaysLater: 2,
    oneWeekLater: 3,
} as const
type MyTaskDeadline = (typeof MyTaskDeadline)[keyof typeof MyTaskDeadline]

// マイタスクのデータ一覧
export const MyTaskInfo: MyTaskType[] = [
    {
        id: 1,
        isStop: true,
        title: 'タスク１',
        status: MyTaskStatus.notStarted,
        priority: MyTaskPriority.high,
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
        status: MyTaskStatus.notStarted,
        priority: MyTaskPriority.high,
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
        status: MyTaskStatus.completed,
        priority: MyTaskPriority.low,
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
        status: MyTaskStatus.notStarted,
        priority: MyTaskPriority.high,
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
        status: MyTaskStatus.notStarted,
        priority: MyTaskPriority.high,
        scheduled_start_day: new Date(2024, 5, 10),
        scheduled_end_day: new Date(2024, 5, 10),
        working_hours: new Date(2024, 5, 10, 1, 0, 0),
        estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        think_estimated_time: new Date(2024, 5, 10, 1, 0, 0),
        progress_rate: 10,
        description: '',
    },
]
