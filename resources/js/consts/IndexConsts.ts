/**
 * 共通
 */

import { MyTaskType } from './MyTaskConst'

// 並び替えメニューの型
export interface MenuType {
    title: string
    name: string
    width: string
}

// 表一行のdataのキーとなる可能性がある型（ここに追加していく）
export type DataType = MyTaskType

// 表一行の型
export interface TableRowType {
    width: MenuType['width']
    alignment: 'left' | 'center' | 'right'
    data:
        | string
        | PriorityOptionsType
        | Date
        | number
        | StatusOptionsType
        | boolean
    type: MenuType['name']
}

// ステータス
export const StatusOptions = {
    notStarted: { value: 1, label: '未着手' },
    working: { value: 2, label: '進行中' },
    completed: { value: 3, label: '完了' },
} as const

// ステータスの型
export type StatusOptionsType =
    (typeof StatusOptions)[keyof typeof StatusOptions]

// 締切日
export const DeadlineOptions = {
    today: { value: 1, label: '今日' },
    threeDaysLater: { value: 2, label: '3日後' },
    oneWeekLater: { value: 3, label: '1週間後' },
}

// 締切日の型
export type DeadlineOptionsType =
    (typeof DeadlineOptions)[keyof typeof DeadlineOptions]

// 優先度
export const PriorityOptions = {
    high: { value: 1, label: '高' },
    middle: { value: 2, label: '中' },
    low: { value: 3, label: '低' },
} as const

// 優先度の型
export type PriorityOptionsType =
    (typeof PriorityOptions)[keyof typeof PriorityOptions]
