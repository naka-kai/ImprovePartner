import { DeadlineOptions } from '@/consts/IndexConsts'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import React, { useState } from 'react'

const DeadlineOption: React.FC = () => {
    const [selectedDeadlineIds, setSelectedDeadlineIds] = useState<number[]>([]) // 選択中の締切日ID

    // 締切日を文字列に変換する
    const toStringDeadline = (num: number): string => {
        if (num === DeadlineOptions.today) {
            return '今日'
        } else if (num === DeadlineOptions.threeDaysLater) {
            return '3日後'
        } else if (num === DeadlineOptions.oneWeekLater) {
            return '1週間後'
        } else {
            throw new Error('不正な値を検出: DeadlineOptions=' + num)
        }
    }

    // 締切日の選択中のIDを管理する
    const handleDeadlineCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const checkedId: number = Number(e.target.value)
        if (e.target.checked) {
            setSelectedDeadlineIds([...selectedDeadlineIds, checkedId])
        } else {
            setSelectedDeadlineIds(
                selectedDeadlineIds.filter((id) => id !== checkedId)
            )
        }
    }

    return (
        <div className="flex flex-col items-center mr-6">
            <p className="mb-2 text-gray-500">締切日</p>
            <div>
                {Object.values(DeadlineOptions).map((deadline) => (
                    <FormControlLabel
                        key={deadline}
                        control={
                            <Checkbox
                                sx={{ display: 'none' }}
                                value={deadline}
                                checked={selectedDeadlineIds.includes(deadline)}
                                onChange={(e) => {
                                    handleDeadlineCheckboxChange(e)
                                }}
                            />
                        }
                        label={toStringDeadline(deadline)}
                        className={
                            selectedDeadlineIds.includes(deadline)
                                ? 'bg-sky-300 py-1 px-4 rounded-sm border-sky-300 border'
                                : 'py-1 px-4 rounded-sm border-gray-200 border'
                        }
                        sx={{
                            marginRight: '0.25rem',
                            marginLeft: '0.25rem',
                        }}
                    />
                ))}
            </div>
        </div>
    )
}

export default DeadlineOption
