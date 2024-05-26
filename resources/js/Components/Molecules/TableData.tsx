import { TableRowType } from '@/consts/IndexConsts'
import React from 'react'
import Checkbox from '../Defaults/Checkbox'

const TableData: React.FC<TableRowType> = ({
    width,
    alignment,
    data,
    type,
}) => {
    // YYYY/MM/DDの形にフォーマットする
    const toDate = (dateInfo: Date): string => {
        const year = dateInfo.getFullYear()
        const month = ('00' + dateInfo.getMonth()).slice(-2)
        const date = ('00' + dateInfo.getDate()).slice(-2)

        return (year + '/' + month + '/' + date).toString()
    }

    // 01:00:00の形にフォーマットする
    const toTime = (timeInfo: Date): string => {
        const hours = ('00' + timeInfo.getHours()).slice(-2)
        const minutes = ('00' + timeInfo.getMinutes()).slice(-2)
        const seconds = ('00' + timeInfo.getSeconds()).slice(-2)

        return (hours + ':' + minutes + ':' + seconds).toString()
    }

    return (
        <>
            <p className={width + ' text-' + alignment}>
                {type === 'priority' && data.toString()}
                {(type === 'scheduled_start_day' ||
                    type === 'scheduled_end_day') &&
                    toDate(data)}
                {type === 'progress_rate' && data + '%'}
                {(type === 'working_hours' ||
                    type === 'estimated_time' ||
                    type === 'think_estimated_time') &&
                    toTime(data)}
                {type === 'status' &&
                    (data !== 3 ? <Checkbox /> : <Checkbox defaultChecked />)}
            </p>
        </>
    )
}

export default TableData
