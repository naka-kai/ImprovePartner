import React from 'react'

type Props = {
    data: string
}

const AddButton: React.FC<Props> = ({ data }) => {
    return <button className="my-3 text-gray-500">＋{data}を追加</button>
}

export default AddButton
