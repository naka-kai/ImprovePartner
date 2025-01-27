import { StatusOptions } from '@/consts/IndexConsts'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import React, { useState } from 'react'
import { Typography } from '@mui/material'

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

    return (
        <div className="flex flex-col items-center">
            <p className="mb-2 text-gray-500 text-sm">ステータス</p>
            <div>
                {Object.values(StatusOptions).map((status) => (
                    <FormControlLabel
                        key={status.value}
                        control={
                            <Checkbox
                                sx={{ display: 'none' }}
                                value={status.value}
                                checked={selectedStatusIds.includes(
                                    status.value
                                )}
                                onChange={(e) => {
                                    handleStatusCheckboxChange(e)
                                }}
                            />
                        }
                        label={status.label}
                        className={
                            selectedStatusIds.includes(status.value)
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
