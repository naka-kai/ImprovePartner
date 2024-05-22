import { StatusOptions } from '@/consts/IndexConsts'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import React, { useState } from 'react'

const StatusOption: React.FC = () => {
    const [selectedStatusIds, setSelectedStatusIds] = useState<number[]>([1, 2]) // 選択中のステータスID

    // ステータスの選択中のIDを管理する
    const handleStatusCheckboxChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const checkedId: number = Number(e.target.value)
        if (e.target.checked) {
            setSelectedStatusIds([...selectedStatusIds, checkedId])
        } else {
            setSelectedStatusIds(
                selectedStatusIds.filter((id) => id !== checkedId)
            )
        }
    }
    // ステータスを文字列に変換する
    const toStringStatus = (num: number): string => {
        if (num === StatusOptions.completed) {
            return '完了'
        } else if (num === StatusOptions.working) {
            return '進行中'
        } else {
            return '未着手'
        }
    }

    return (
        <div className="flex flex-col items-center">
            <p className="mb-2 text-gray-500">ステータス</p>
            <div>
                {Object.values(StatusOptions).map((status) => (
                    <FormControlLabel
                        key={status}
                        control={
                            <Checkbox
                                sx={{ display: 'none' }}
                                value={status}
                                checked={selectedStatusIds.includes(status)}
                                onChange={(e) => {
                                    handleStatusCheckboxChange(e)
                                }}
                            />
                        }
                        label={toStringStatus(status)}
                        className={
                            selectedStatusIds.includes(status)
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

export default StatusOption
