import { InputHTMLAttributes } from 'react'

export default function Checkbox({
    className = '',
    ...props
}: InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-300 text-sky-500 shadow-sm focus:ring-0 ' +
                className
            }
        />
    )
}
