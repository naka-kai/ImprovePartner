import React from 'react'
import UnfoldMoreOutlinedIcon from '@mui/icons-material/UnfoldMoreOutlined'

type Props = {
    menu: string
    width: string
    colorNum: string
}

const SortButton: React.FC<Props> = ({ menu, width, colorNum }) => {
    return (
        <div
            className={`flex items-center text-gray-${colorNum} ${width} justify-center`}
        >
            <UnfoldMoreOutlinedIcon sx={{ fontSize: 20 }} />
            <p>{menu}</p>
        </div>
    )
}

export default SortButton
