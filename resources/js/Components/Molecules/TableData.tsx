import { TableRowType } from '@/consts/IndexConsts'
import React from 'react'
import Checkbox from '../Defaults/Checkbox'
import { format } from 'date-fns/format'

const TableData: React.FC<TableRowType> = ({
    width,
    alignment,
    data,
    type,
}) => {
    // YYYY/MM/DDの形にフォーマットする
    const toDate = (dateInfo: Date): string => {
        if (dateInfo) {
            return format(dateInfo, 'yyyy/MM/dd')
        }
        return '-'
    }

    // 01:00:00の形にフォーマットする
    const toTime = (timeInfo: Date): string => {
        if (timeInfo) {
            return format(timeInfo, 'HH:mm:ss')
        }
        return '-'
    }

    return (
        <>
            <p className={width + ' text-' + alignment}>
                {type === 'priority' && data.label}
                {(type === 'scheduled_start_day' ||
                    type === 'scheduled_end_day') &&
                    toDate(data)}
                {type === 'progress_rate' && data + '%'}
                {(type === 'working_hours' ||
                    type === 'estimated_time' ||
                    type === 'think_estimated_time') &&
                    toTime(data)}
                {type === 'status' &&
                    (data.value !== 3 ? (
                        <Checkbox />
                    ) : (
                        <Checkbox defaultChecked />
                    ))}
                {type === '' && '-'}
            </p>
        </>
    )
}

export default TableData
