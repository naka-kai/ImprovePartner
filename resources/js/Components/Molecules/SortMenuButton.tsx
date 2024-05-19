import React from 'react'
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined'

type Props = {
    menu: string
    width: string
}

const SortMenuButton: React.FC<Props> = ({ menu, width }) => {
    return (
        <div
            className={`flex items-center text-gray-400 ${width} justify-center`}
        >
            <UnfoldMoreOutlinedIcon sx={{ fontSize: 20 }} />
            <p>{menu}</p>
        </div>
    )
}

export default SortMenuButton
