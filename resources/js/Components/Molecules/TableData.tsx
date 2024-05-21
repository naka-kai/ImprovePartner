import { TableRowType } from '@/consts/IndexConsts'
import React from 'react'

const TableData: React.FC<TableRowType> = ({
    function: func,
    data,
    width,
    alignment,
}) => {
    const result = func ? func(data) : String(data)
    return <p className={`${width} text-${alignment}`}>{result}</p>
}

export default TableData
