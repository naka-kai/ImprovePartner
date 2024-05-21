/**
 * 共通
 */

// 並び替えメニューの型
export interface SortMenuType {
    name: string
    width: string
}

// 表一行の型
export interface TableRowType {
    data: string | PriorityOptionsType | Date | number | StatusOptionsType
    function?: (
        data: string | PriorityOptionsType | Date | number | StatusOptionsType
    ) => string
    width: string
    alignment: 'left' | 'center' | 'right'
}

// ステータス
export const StatusOptions = {
    notStarted: 1, // 未着手
    working: 2, // 進行中
    completed: 3, // 完了
} as const

// ステータスの型
export type StatusOptionsType =
    (typeof StatusOptions)[keyof typeof StatusOptions]

// 締切日
export const DeadlineOptions = {
    today: 1,
    threeDaysLater: 2,
    oneWeekLater: 3,
} as const

// 締切日の型
export type DeadlineOptionsType =
    (typeof DeadlineOptions)[keyof typeof DeadlineOptions]

// 優先度
export const PriorityOptions = {
    high: 1,
    middle: 2,
    low: 3,
} as const

// 優先度の型
export type PriorityOptionsType =
    (typeof PriorityOptions)[keyof typeof PriorityOptions]
