import React from 'react'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined'

type Props = {
    data: string
}

const AddButton: React.FC<Props> = ({ data }) => {
    return (
        <button className="my-3 text-gray-500 flex items-center justify-center">
            <span>
                <AddOutlinedIcon sx={{ verticalAlign: '-3.5px' }} />
            </span>
            <span>{data}を追加</span>
        </button>
    )
}

export default AddButton
